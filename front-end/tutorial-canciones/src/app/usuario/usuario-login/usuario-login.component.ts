import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
    ) { }
  
  error: boolean = false
  login: boolean = false

  ngOnInit() {
  }

  onLogInUsuario(nombre: string, contrasena: string){
    this.error = false
    
    this.usuarioService.userLogIn(nombre, contrasena)
    .subscribe(res => {

      localStorage.setItem("token", res.token)
      this.login = true
      let user = new Usuario(res.usuario.id, res.usuario.nombre, res.usuario.albumes)
      this.router.navigate(['/albumes'])
    },
    error => {
      console.log(error.error)
      this.error=true
    })
  }

}
