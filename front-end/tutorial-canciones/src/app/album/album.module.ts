import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list/album-list.component';


@NgModule({
  declarations: [AlbumListComponent],
  imports: [
    CommonModule
  ],
  exports:[AlbumListComponent]
})
export class AlbumModule { }
