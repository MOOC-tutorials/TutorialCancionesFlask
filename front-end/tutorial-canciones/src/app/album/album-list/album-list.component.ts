import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  constructor(
    private albumService: AlbumService,
    private router: ActivatedRoute,
    private toastr: ToastrService
    ) { }

  albumes: Array<Album> = [];

  ngOnInit() {
    this.getAlbumes();
  }

  getAlbumes():void{
    const userId = parseInt(this.router.snapshot.params.userId)
    const token = this.router.snapshot.params.userToken
    console.log(userId, token)
    if(!userId){
      this.showError("No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
    }
    else{
      this.albumService.getAlbumes(userId, token)
      .subscribe(albumes => {
        this.albumes = albumes
        console.log(albumes)
      },
      error => {
        if(error.statusText === "UNAUTHORIZED"){
          this.showWarning("Su sesión ha caducado, por favor vuelva a iniciar sesión.")
        }
        else if(error.statusText === "UNPROCESSABLE ENTITY"){
          this.showError("No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
        }
        else{
          this.showError("Ha ocurrido un error. " + error.message)
        }
        console.log(error)
      })
    }
  }

  showError(error: string){
    this.toastr.error(error, "Error de autenticación")
  }

  showWarning(warning: string){
    this.toastr.warning(warning, "Error de autenticación")
  }

}
