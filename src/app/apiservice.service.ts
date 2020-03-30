import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiserviceService {

  constructor(private http: HttpClient) { }
  //Retorna les ultimes pelicules
  getLastFilms(){
    var dataYear = new Date().getFullYear();
    const URL = 'https://api.themoviedb.org/3/discover/movie?api_key=08e9758619c4e4b50993ac2edf2eb5bd&sort_by=popularity.desc&include_adult=false&include_video=false&release_date.gte='+dataYear+'&with_genres=27';
    return this.http.get(URL);
  }
  getResearch(strNom:string){
    var name = strNom.replace(' ', '%20');
    const URL = 'https://api.themoviedb.org/3/search/movie?api_key=08e9758619c4e4b50993ac2edf2eb5bd&query='+name+'&page=1';
    return this.http.get(URL);
  }
  getFilm(strId:string){
    const URL = 'https://api.themoviedb.org/3/movie/'+strId+'?api_key=08e9758619c4e4b50993ac2edf2eb5bd';
    return this.http.get(URL);
  }

}