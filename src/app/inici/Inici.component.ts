import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { LSServiceService} from '../lsservice.service';

@Component({
  selector: 'app-inici',
  templateUrl: 'Inici.component.html'
})
export class IniciComponent {
films: Array<any> = [];
constructor(private api: ApiserviceService,private dades: LSServiceService) { 

}
mostrarPelicules():void{
  this.api.getLastFilms().subscribe(x =>{
    if(x){
      this.films = x.results;
      console.log(this.films);
    }
  })
}
  ngOnInit() {
    this.mostrarPelicules();
  }
  ngOnDestroy(){
    
  }

}