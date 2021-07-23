import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';


@NgModule({
  declarations: [AlbumListComponent, AlbumDetailComponent],
  imports: [
    CommonModule
  ],
  exports:[AlbumListComponent, AlbumDetailComponent]
})
export class AlbumModule { }
