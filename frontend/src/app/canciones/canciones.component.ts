import { Component, OnInit } from '@angular/core';
import {Cancion} from './Cancion';
import { CancionesService } from './canciones.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent implements OnInit {
  
  constructor(private cancionesService: CancionesService) {  }
  canciones: Array<Cancion>;
  
  
  getCancionesList() {
    this.cancionesService.getCanciones('').subscribe(cs => {
      this.canciones = cs;
    });
  }
  ngOnInit() {
    this.getCancionesList();
  }
  
}
