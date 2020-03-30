import { Injectable, Inject, InjectionToken } from '@angular/core';
import {default as dades} from './LS/ls.json';

export const LOCAL_STORAGE = new InjectionToken<Storage>('Local Storage', {
  providedIn: 'root',
  factory: () => localStorage
});

export interface Pelicules {
  id: string;
  nom: string;
  imatge: string;
  
}

@Injectable({
  providedIn: 'root'
})
export class LSServiceService {
  filmList = [];
  constructor(@Inject(LOCAL_STORAGE )public dades: Storage) { 
    let ls = this.dades.getItem('appData');
    if (ls) {
      this.filmList = JSON.parse(ls);
    }
    else {
      this.filmList = [];
    }
  }

afegirPelicula(pelicules: Pelicules):void {
  this.filmList.push(pelicules);
  this.dades.setItem('appData',JSON.stringify(this.filmList));
}
newPelicula(id,nom,imatge):Pelicules{
  return <Pelicules>{id: id, nom: nom, imatge: imatge};
}
deletePelicula(strId:string):void{
  this.filmList.splice(this.filmList.indexOf(strId),1);
  this.dades.setItem('appData', JSON.stringify(this.filmList));
}
checkFilm(strId:string):boolean{
  let exists = false;
  for (let i=0; i<this.filmList.length;i++){
    if(this.filmList[i].id == strId){
      exists = true;
      break;
    }
  }
  return exists;
}
getPelicules():Array<Pelicules>{
  return this.filmList;
}
}