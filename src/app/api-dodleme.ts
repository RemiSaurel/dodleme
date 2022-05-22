import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Evenement} from "./Evenement";
import {User} from "./User";

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
}
