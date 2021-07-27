import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cancion } from 'src/app/cancion/cancion';
import { CancionService } from 'src/app/cancion/cancion.service';
import { Album} from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-join-cancion',
  templateUrl: './album-join-cancion.component.html',
  styleUrls: ['./album-join-cancion.component.css']
})
export class AlbumJoinCancionComponent implements OnInit {

  userId: number;
  token: string;
  albumId: number;
  album: Album;
  albumCancionForm !: FormGroup;
  canciones: Array<Cancion>

  constructor(
    private albumService: AlbumService,
    private cancionService: CancionService,
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private routerPath: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    if(!parseInt(this.router.snapshot.params.userId) || this.router.snapshot.params.userToken === " "){
      this.showError("No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
    }
    else{
      this.userId = parseInt(this.router.snapshot.params.userId)
      this.token = this.router.snapshot.params.userToken
      this.albumId = this.router.snapshot.params.albumId
      this.albumService.getAlbum(this.albumId)
      .subscribe(album => {
        this.album = album
        this.albumCancionForm = this.formBuilder.group({
          tituloAlbum: [album.titulo, [Validators.required]],
          idCancion: ["", [Validators.required]],
          tituloCancion: ["", [Validators.required]]
        })
        this.getCanciones(album.canciones)
      })
    }
  }

  getCanciones(cancionesAlbum: Array<any>){
    let cancionesNoAgregadas: Array<Cancion> = []
    this.cancionService.getCanciones()
    .subscribe(canciones => {
      canciones.map(c => {
        if(!cancionesAlbum.includes(c.id)){
          cancionesNoAgregadas.push(c)
        }
      })
    })
    this.canciones = cancionesNoAgregadas
  }

  cancelarAsociacion(){
    this.albumCancionForm.reset()
    this.routerPath.navigate([`/albumes/${this.userId}/${this.token}`])
  }

  asociarCancion(){
    this.albumService.asociarCancion(this.albumId, this.albumCancionForm.get('idCancion')?.value)
    .subscribe(cancion => {
      this.showSuccess(this.albumCancionForm.get('tituloAlbum')?.value, cancion.titulo)
      this.albumCancionForm.reset()
      this.routerPath.navigate([`/albumes/${this.userId}/${this.token}`])
    },
    error=> {
      if(error.statusText === "UNPROCESSABLE ENTITY"){
        this.showError("No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
      }
      else{
        this.showError("Ha ocurrido un error. " + error.message)
      }
    })
  }

  onSelect(albumId: any){
    this.albumCancionForm.get('idCancion')?.setValue(albumId)
  }

  showError(error: string){
    this.toastr.error(error, "Error")
  }

  showSuccess(tituloAlbum: string, tituloCancion: string) {
    this.toastr.success(`La canción ${tituloCancion} se agregó al album ${tituloAlbum}`, "Asociación exitosa");
  }

}
