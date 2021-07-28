import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { UsuarioSignupComponent } from './usuario-signup/usuario-signup.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsuarioLoginComponent, UsuarioSignupComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [UsuarioLoginComponent, UsuarioSignupComponent]
})
export class UsuarioModule { }
