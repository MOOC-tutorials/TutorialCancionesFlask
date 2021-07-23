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

  ngOnInit() {
  }

  onLogInUsuario(nombre: string, contrasena: string){
    this.error = false
    
    this.usuarioService.userLogIn(nombre, contrasena)
    .subscribe(res => {
      this.router.navigate([`/albumes/${res.usuario.id}/${res.token}`])
    },
    error => {
      this.error=true
    })
  }

}
