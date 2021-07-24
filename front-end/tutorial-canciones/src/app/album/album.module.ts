import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumCreateComponent } from './album-create/album-create.component';


@NgModule({
  declarations: [AlbumListComponent, AlbumDetailComponent, AlbumCreateComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports:[AlbumListComponent, AlbumDetailComponent, AlbumCreateComponent]
})
export class AlbumModule { }
