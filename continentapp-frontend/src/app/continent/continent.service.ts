import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Continent } from "./continent";

@Injectable({
  //Pour faire de notre 'ContinentService' une entité de service, il doit être décoré avec le '@Injectable' qui se charge à partir de '@angular/core'.
  providedIn: 'root'
})
export class ContinentService {

  constructor(private http:HttpClient) { }//Injecté l'instance 'HttpClient' qui se charge à partir de '@angular/common/http'.

  get(){
    return this.http.get<Continent[]>("http://localhost:3000/continent")
  }
}
