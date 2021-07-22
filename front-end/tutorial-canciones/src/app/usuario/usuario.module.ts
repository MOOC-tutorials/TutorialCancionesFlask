import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';


@NgModule({
  declarations: [UsuarioLoginComponent],
  imports: [
    CommonModule
  ],
  exports: [UsuarioLoginComponent]
})
export class UsuarioModule { }
