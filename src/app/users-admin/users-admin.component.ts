import { Component, OnInit } from '@angular/core';
import {ApiDodleMe} from "../api-dodleme";
import {User} from "../User";
import {AppComponent} from "../app.component";
import {Evenement} from "../Evenement";

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent implements OnInit {

  // Liste des utilisateurs et des événements
  users: User[];
  events: Evenement[];

  constructor(private apiDodleMe: ApiDodleMe,
              private appComponent: AppComponent) { }

  // Appel au back pour récupérer les informations
  ngOnInit(): void {
    this.appComponent.getAllUsers().subscribe(data => {
      this.users = data;
    })
    this.apiDodleMe.getAllEvents().subscribe(data => {
      this.events = data;
    })
  }

  // Supprimer tous les utilisateurs
  clearAllUsers() {
    this.apiDodleMe.clearAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  // Supprimer l'utilisateur passé en argument
  clearUser(user: User) {
    this.apiDodleMe.clearUser(user).subscribe(data => {
      this.users = data;
    })
  }

  // Supprimer tous les événements
  clearAllEvents() {
    this.apiDodleMe.clearAllEvents().subscribe(data => {
      this.events = data;
    });
  }

  // Supprimer l'événement passé en argument
  clearEvent(event: Evenement) {
    this.apiDodleMe.clearEvent(event).subscribe(data => {
      this.events = data;
    })
  }

}
