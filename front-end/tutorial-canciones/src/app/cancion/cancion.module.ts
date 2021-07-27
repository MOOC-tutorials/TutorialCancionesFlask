import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancionListComponent } from './cancion-list/cancion-list.component';
import { AppHeaderModule } from '../app-header/app-header.module';



@NgModule({
  declarations: [CancionListComponent],
  imports: [
    CommonModule, AppHeaderModule
  ],
  exports:[CancionListComponent]
})
export class CancionModule { }
