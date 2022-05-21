import { Component, OnInit } from '@angular/core';
import {Evenement} from "../Evenement";
import {ApiDodleMe} from "../api-dodleme";

@Component({
  selector: 'app-lister-evenements',
  templateUrl: './lister-evenements.component.html',
  styleUrls: ['./lister-evenements.component.css']
})
export class ListerEvenementsComponent implements OnInit {
  evenements: Evenement[];
  constructor(private apiDodleMe: ApiDodleMe) { }

  clearAllEvents() {
    this.apiDodleMe.clearAllEvents();
    location.reload();
  }

  ngOnInit(): void {
    this.apiDodleMe.recupererListe().subscribe((data) => {
      if (data) {
        this.evenements = data;
      }
    });
  }
}
