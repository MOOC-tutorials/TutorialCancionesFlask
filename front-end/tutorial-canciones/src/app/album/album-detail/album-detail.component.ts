import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../album';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  @Input() album: Album = new Album(0, "Titulo del album", 0, "Descripción del album", {"llave": "DISCO", "valor": 1}, 0, [], [])

  constructor() { }

  ngOnInit() {
  }

}
