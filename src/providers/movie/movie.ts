import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  public baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getApiKey():string {
    return '?api_key=a3e1149e8ea9e9c4b6f0584be7f71b5d';
  }

  getLatestMovies() {
    return this.http.get(this.baseApiPath + "/movie/popular" + this.getApiKey());
  }
}
