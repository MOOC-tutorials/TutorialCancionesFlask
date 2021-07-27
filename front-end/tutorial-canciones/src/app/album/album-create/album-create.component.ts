import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlbumService } from '../album.service';
import { Album, Medio } from '../album';

@Component({
  selector: 'app-album-create',
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.css']
})
export class AlbumCreateComponent implements OnInit {

  userId: number
  token: string
  albumForm: FormGroup
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
    private routerPath: Router
    ) { }


  ngOnInit() {
    if(!parseInt(this.router.snapshot.params.userId) || this.router.snapshot.params.userToken === " "){
      this.showError("No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
    }
    else{
      this.userId = parseInt(this.router.snapshot.params.userId)
      this.token = this.router.snapshot.params.userToken
      this.albumForm = this.formBuilder.group({
        titulo: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(128)]],
        anio: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
        descripcion: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(512)]],
        medio: ["", [Validators.required]]
      })
    }
  }

  showError(error: string){
    this.toastr.error(error, "Error")
  }

  showWarning(warning: string){
    this.toastr.warning(warning, "Error de autenticación")
  }

  showSuccess(album: Album) {
    this.toastr.success(`El album ${album.titulo} fue creado`, "Creación exitosa");
  }

  cancelCreate(){
    this.albumForm.reset()
    this.routerPath.navigate([`/albumes/${this.userId}/${this.token}`])
  }

  createAlbum(newAlbum: Album){
    this.albumForm.get('anio')?.setValue(parseInt(this.albumForm.get('anio')?.value))
    this.albumService.crearAlbum(this.userId, this.token, newAlbum)
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

}
