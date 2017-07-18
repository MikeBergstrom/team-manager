import { Injectable } from '@angular/core';
import 'rxjs/Rx'
import { Http } from '@angular/http';


@Injectable()
export class ApiService {

  constructor(private _http:Http) { }
  retrieveAll(){
    return this._http.get('/players')
    .map( data => data.json())
    .toPromise(); 
  }

  create(player){
    console.log("create player api service", player);
    return this._http.post('/players/create', player)
    .map(data => data.json())
    .toPromise();
  }
  delete(player){
    console.log("delete player api service", player);
    return this._http.post('/players/delete', player)
    .map(data => data.json())
    .toPromise();
  }
  update(player){
    console.log("update player api service", player);
    return this._http.post('/players/update', player)
    .map(data => data.json())
    .toPromise();
  }
}
