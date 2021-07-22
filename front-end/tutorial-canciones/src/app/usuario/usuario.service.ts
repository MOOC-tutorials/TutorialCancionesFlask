import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
    providedIn: 'root'
  })
export class UsuarioService {

    private backUrl: string = "http://127.0.0.1:5000/logIn"

    constructor(private http: HttpClient) { }

    userLogIn(nombre: string, contrasena: string):Observable<any>{
        return this.http.post<any>(this.backUrl, {"nombre": nombre, "contrasena": contrasena });
    }
}
