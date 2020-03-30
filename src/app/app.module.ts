import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DetallsComponent } from './detalls/detalls.component';
import { ApiserviceService } from './apiservice.service';
import { IniciComponent } from './inici/Inici.component';
import { BuscarComponent } from './buscar/buscar.component';
import { FavoriteComponent } from './favorites/favorites.component';
import { CategoriesComponent } from './categories/categories.component';
import { LSServiceService } from './lsservice.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule ],
  declarations: [ AppComponent, IniciComponent, CategoriesComponent, FavoriteComponent, DetallsComponent, BuscarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ApiserviceService, LSServiceService]
})
export class AppModule { }
