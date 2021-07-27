import { Component, OnInit } from '@angular/core';
import { Cancion } from 'src/app/album/album';
import { CancionService } from '../cancion.service';

@Component({
  selector: 'app-cancion-list',
  templateUrl: './cancion-list.component.html',
  styleUrls: ['./cancion-list.component.css']
})
export class CancionListComponent implements OnInit {

  constructor(
    private cancionService: CancionService
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
    })
  }

  onSelect(cancion: Cancion, indice: number){

  }

  buscarCancion(busqueda: string){

  }

  irCrearCancion(){

  }

}
