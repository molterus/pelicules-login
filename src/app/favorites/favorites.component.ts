import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { LSServiceService} from '../lsservice.service';

@Component({
  selector: 'app-favorites',
  templateUrl: 'favorites.component.html'
})
export class FavoriteComponent implements OnInit {

films: Array<any> = [];
constructor(private api: ApiserviceService,private dades:LSServiceService) {}
mostrarFavorites(){
  let x = this.dades.getPelicules();
  if (x) {
    x.map((elem,i)=>{
      console.log(elem);
    })
    this.films = x;
  }
}
delete(strId) {
  this.dades.deletePelicula(strId);
}
  ngOnInit() {
    this.mostrarFavorites();
  }

}