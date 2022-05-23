import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Evenement} from "./Evenement";
import {User} from "./User";
import {Creneau} from "./Creneau";

@Injectable({
  providedIn: 'root'
})

export class ApiDodleMe {
  private url = "http://localhost:3000/api"; // TODO : CHANGER URL POUR BACK SI BESOIN

  constructor(private httpClient: HttpClient) {
  }

  public getAllEvents() : Observable<Evenement[]>{
    return this.httpClient.get<Evenement[]>(this.url + "/events");
  }

  public getEventsCrees(user: User) : Observable<Evenement[]>{
    return this.httpClient.get<Evenement[]>(this.url + "/events/" + user.username)
  }

  public getInfoEvent(event: Evenement) : Observable<Evenement> {
    return this.httpClient.get<Evenement>(this.url + "/event/" + event._id)
  }

  public getInfoCreneau(creneau: Creneau) : Observable<Creneau> {
    return this.httpClient.get<Creneau>(this.url + "/creneau/" + creneau._id)
  }

  public ajouterEvent(event: Evenement) {
    this.httpClient.post<Evenement>(this.url + "/create", event)
      .subscribe(data => console.log(data));
  }

  public clearAllEvents() {
    this.httpClient.delete(this.url + "/events")
      .subscribe(data => console.log(data));
  }

  public connexionUtilisateur(user: User) : Observable<User>{
    return this.httpClient.get<User>(this.url + "/users/" + user.username);
  }

  public inscriptionUtilisateur(user: User) : Observable<User> {
    return this.httpClient.post<User>(this.url + "/users", user);
  }

  public getAllUsers() : Observable<User[]> {
    return this.httpClient.get<User[]>(this.url + "/users")
  }

  public clearAllUsers() {
    this.httpClient.delete(this.url + "/users")
      .subscribe(data => console.log(data));
  }

  public clearUser(user: User) : Observable<User[]>{
    return this.httpClient.delete<User[]>(this.url + "/users/" + user.username);
  }

  public addUserToEvent(idEvent: string, idCreneau: string, username: string, estOK:boolean) : Observable<Evenement[]>{
    const body = {
      username: username,
      estOK: estOK
    }

    return this.httpClient.patch<Evenement[]>(this.url + "/events/" + idEvent + "/creneaux/" + idCreneau, body);
  }
}
