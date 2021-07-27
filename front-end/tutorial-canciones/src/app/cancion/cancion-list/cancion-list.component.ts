import { Component, OnInit } from '@angular/core';
import { Cancion } from '../cancion';
import { AlbumService } from 'src/app/album/album.service';
import { CancionService } from '../cancion.service';

@Component({
  selector: 'app-cancion-list',
  templateUrl: './cancion-list.component.html',
  styleUrls: ['./cancion-list.component.css']
})
export class CancionListComponent implements OnInit {

  constructor(
    private cancionService: CancionService,
    private albumService: AlbumService
  ) { }

  userId: number
  token: string
  canciones: Array<Cancion>
  mostrarCanciones: Array<Cancion>
  cancionSeleccionada: Cancion
  indiceSeleccionado: number = 0

  ngOnInit() {
    this.getCanciones()
  }

  getCanciones():void{
    this.cancionService.getCanciones()
    .subscribe(canciones => {
      this.canciones = canciones
      this.mostrarCanciones = canciones
      this.onSelect(this.mostrarCanciones[0], 0)
    })
  }

  onSelect(cancion: Cancion, indice: number){
    this.indiceSeleccionado = indice
    this.cancionSeleccionada = cancion
    let albumes: Array<any> = []
    cancion.albumes.map( c => {
      this.albumService.getAlbum(c)
      .subscribe(album => {
        albumes.push(album)
      })
    })
    this.cancionSeleccionada.albumes = albumes
  }

  buscarCancion(busqueda: string){

  }

  irCrearCancion(){

  }

}
