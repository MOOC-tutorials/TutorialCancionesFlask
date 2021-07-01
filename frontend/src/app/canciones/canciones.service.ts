import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Cancion} from './Cancion';

@Injectable({
  providedIn: 'root'
})
export class CancionesService {

constructor(private http: HttpClient) { }

public getCanciones(nombre : String): Observable<Cancion[]>{
  var query : String =(nombre!="")?`?nombre=${nombre}`:"";
  return this.http.get<Cancion[]>(`http://127.0.0.1:5000/canciones${query}`);
}

}
