import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancionesComponent } from './canciones.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CancionesComponent],
  exports:[CancionesComponent]
})
export class CancionesModule { }
