import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Evenement} from "./Evenement";

@Injectable({
  providedIn: 'root'
})

export class ApiDodleMe {
  private url = "http://localhost:3000/api/events" // TODO : CHANGER URL POUR BACK SI BESOIN
  constructor(private httpClient: HttpClient) {
  }

  public recupererListe() : Observable<Evenement[]>{
    return this.httpClient.get<Evenement[]>(this.url);
  }

  public ajouterEvent(event: Evenement) {
    // console.log(event)
    this.httpClient.post<Evenement>(this.url, event);
  }
}
