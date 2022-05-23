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
}
