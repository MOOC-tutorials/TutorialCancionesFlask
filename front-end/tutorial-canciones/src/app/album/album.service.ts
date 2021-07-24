import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album, Cancion } from './album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private backUrl: string = "api"

  constructor(private http: HttpClient) { }

  getAlbumes(usuario: number, token: string): Observable<Album[]>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`       
    })
    return this.http.get<Album[]>(`${this.backUrl}/usuario/${usuario}/albumes`, {headers: headers})
  }

  getCancionesAlbum(idAlbum: number, token: string): Observable<Cancion[]>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`       
    })
    return this.http.get<Cancion[]>(`${this.backUrl}/album/${idAlbum}/canciones`, {headers: headers})
  }

  crearAlbum(idUsuario: number, token: string, album: Album):Observable<Album>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`       
    })
    return this.http.post<Album>(`${this.backUrl}/usuario/${idUsuario}/albumes`, album, {headers: headers})
  }

  getAlbum(albumId: number): Observable<Album>{
    return this.http.get<Album>(`${this.backUrl}/album/${albumId}`)
  }

  editarAlbum(idUsuario: number, token: string, albumId: number, album: Album): Observable<Album>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`       
    })
    return this.http.put<Album>(`${this.backUrl}/album/${albumId}`, album, {headers: headers})
  }

}
