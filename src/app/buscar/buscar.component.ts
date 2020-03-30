import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { LSServiceService} from '../lsservice.service';

@Component({
  selector: 'app-buscar',
  templateUrl: 'buscar.component.html'
})
export class BuscarComponent {
constructor(private api: ApiserviceService,private dades: LSServiceService) { 

}
films = [];
getSearch(strValue:string):void{
  
  this.api.getResearch(strValue).subscribe(x =>{
    if(x){
      this.films = x.results;
      console.log(this.films);
    }
  })
}
  ngOnInit() {

  }
  ngOnDestroy(){
    
  }

}