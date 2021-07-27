import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Album, Medio } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.css']
})
export class AlbumEditComponent implements OnInit {

  userId: number;
  token: string;
  albumId: number;
  albumForm!: FormGroup;
  medios:Array<Medio> = [
    {
      llave: "DISCO",
      valor: 1
    },
    {
      llave: "CASETE",
      valor: 2
    },
    {
      llave: "CD",
      valor: 3
    }
  ]

  constructor(
    
    private albumService: AlbumService,
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    private routerPath: Router) { }

  ngOnInit() {
    if(!parseInt(this.router.snapshot.params.userId) || this.router.snapshot.params.userToken === " "){
      this.showError("No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
    }
    else{
      this.albumService.getAlbum(parseInt(this.router.snapshot.params.albumId))
      .subscribe(album => {
        this.albumId = album.id
        this.albumForm = this.formBuilder.group({
          titulo: [album.titulo, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]],
          anio: [album.anio, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
          descripcion: [album.descripcion, [Validators.required, Validators.minLength(1), Validators.maxLength(512)]],
          medio: [album.medio.llave, [Validators.required]]
        })
      })
      this.userId = parseInt(this.router.snapshot.params.userId)
      this.token = this.router.snapshot.params.userToken
    }
  }

  cancelCreate(){
    this.albumForm.reset()
    this.routerPath.navigate([`/albumes/${this.userId}/${this.token}`])
  }

  editarAlbum(newAlbum: Album){
    console.log(newAlbum)
    this.albumForm.get('anio')?.setValue(parseInt(this.albumForm.get('anio')?.value))
    this.albumService.editarAlbum(this.userId, this.token, this.albumId, newAlbum)
    .subscribe(album => {
      this.showSuccess(album)
      this.albumForm.reset()
      this.routerPath.navigate([`/albumes/${this.userId}/${this.token}`])
    },
    error=> {
      if(error.statusText === "UNAUTHORIZED"){
        this.showWarning("Su sesión ha caducado, por favor vuelva a iniciar sesión.")
      }
      else if(error.statusText === "UNPROCESSABLE ENTITY"){
        this.showError("No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
      }
      else{
        this.showError("Ha ocurrido un error. " + error.message)
      }
    })
  }


  showError(error: string){
    this.toastr.error(error, "Error")
  }

  showWarning(warning: string){
    this.toastr.warning(warning, "Error de autenticación")
  }

  showSuccess(album: Album) {
    this.toastr.success(`El album ${album.titulo} fue editado`, "Edición exitosa");
  }

}
