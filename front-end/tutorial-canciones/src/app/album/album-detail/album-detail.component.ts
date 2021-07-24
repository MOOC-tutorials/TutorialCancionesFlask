import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Album } from '../album';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  @Input() album: Album = new Album(0, "Titulo del album", 0, "Descripción del album", {"llave": "DISCO", "valor": 1}, 0, [], [])

  constructor(
    private routerPath: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  goToEdit(){
    const userId = this.route.snapshot.params.userId
    const token = this.route.snapshot.params.userToken
    console.log("object")
    this.routerPath.navigate([`/albumes/edit/${this.album.id}/${userId}/${token}`])
  }

}
