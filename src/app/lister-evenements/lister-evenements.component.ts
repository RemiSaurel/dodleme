import { Component, OnInit } from '@angular/core';
import {Evenement} from "../Evenement";
import {ApiDodleMe} from "../api-dodleme";
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";
import {Creneau} from "../Creneau";

@Component({
  selector: 'app-lister-evenements',
  templateUrl: './lister-evenements.component.html',
  styleUrls: ['./lister-evenements.component.css']
})
export class ListerEvenementsComponent implements OnInit {
  evenements: Evenement[];
  username: string = this.appComponent.user.username;

  constructor(private apiDodleMe: ApiDodleMe,
              private router: Router,
              private appComponent: AppComponent ) { }

  clearAllEvents() {
    this.apiDodleMe.clearAllEvents();
    this.evenements = [];
  }

  getInfoEvent(event: Evenement) {
    this.apiDodleMe.getInfoEvent(event).subscribe(evenement => {
      console.log(evenement)
    });
  }

  getCreneau(creneau: Creneau) {
    this.apiDodleMe.getInfoCreneau(creneau).subscribe(creneau => {
      console.log(creneau)
    });
  }

  ngOnInit(): void {
    this.apiDodleMe.getAllEvents().subscribe((data) => {
      if (data) {
        this.evenements = data;
      }
    });
  }

  addUserToEvent(event: Evenement, creneau : Creneau, estOK : boolean) {
    // Si estOK pour ce créneau ET pas présent dans participants_OK
    // OU
    // Si pasOK pour ce créneau ET pas présent dans participants_NOT_OK
    if (estOK && Object.values(creneau.participants.participants_OK).indexOf(this.username) == -1
      || !estOK && Object.values(creneau.participants.participants_NOT_OK).indexOf(this.username) == -1) {
      this.apiDodleMe.addUserToEvent(event._id, creneau._id, this.username, estOK).subscribe(data => {
          this.evenements = data;
      })
    }
  }
}
