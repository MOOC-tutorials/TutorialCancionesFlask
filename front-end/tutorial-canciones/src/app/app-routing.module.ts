import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioLoginComponent } from './usuario/usuario-login/usuario-login.component';
import { AlbumListComponent } from './album/album-list/album-list.component';
import { AlbumCreateComponent } from './album/album-create/album-create.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioLoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'albumes/:userId/:userToken',
    component: AlbumListComponent
  },
  {
    path: 'albumes/create/:userId/:userToken',
    component: AlbumCreateComponent
  },
  {
    path: 'canciones',
    component: UsuarioLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
