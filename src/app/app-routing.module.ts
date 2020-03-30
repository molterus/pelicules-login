import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IniciComponent } from './inici/Inici.component';
import { BuscarComponent } from './buscar/buscar.component';
import { DetallsComponent } from './detalls/detalls.component';
import { FavoriteComponent } from './favorites/favorites.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {
    path: '',
    component: IniciComponent
  },
  {
    path: 'favorites',
    component: FavoriteComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'detalls/:parametre',
    component: DetallsComponent
  }, 
  {
    path: 'buscar',
    component: BuscarComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }