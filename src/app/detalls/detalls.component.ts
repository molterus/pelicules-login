import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';
import { LSServiceService } from '../lsservice.service';

@Component({
  selector: 'app-detalls',
  templateUrl: 'detalls.component.html'

})

export class DetallsComponent implements OnInit {
  constructor(private api: ApiserviceService,private param: ActivatedRoute,private dades:LSServiceService){}
  strParam = '';
  poster_path = '';
  original_title = '';
  original_language = '';
  release_date = '';
  runtime = '';
  vote_average = '';
  homepage = '';
  id = '';
  getDetalls(strId){
    this.api.getFilm(strId).subscribe(x=>{
      this.id = x.id;
      this.poster_path = x.poster_path;
      this.original_title = x.original_title;
      this.original_language = x.original_language;
      this.release_date = x.release_date;
      this.runtime = x.runtime;
      this.vote_average = x.vote_average;
      this.homepage = x.homepage;
    })
  }
  addFav(strId, strNom, strFoto){
    if (!this.dades.checkFilm(strId)){
      this.dades.afegirPelicula(this.dades.newPelicula(strId,strNom,strFoto));
    }
    else{
      alert("Ja tens la pelicula a Favorits");
    }
    
  }
  ngOnInit(){
    this.param.params.subscribe(
      resultat => {
        this.strParam = resultat.parametre;
        this.getDetalls(this.strParam);
      }
    )
  }
}