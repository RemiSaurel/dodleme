import { Component, OnInit } from '@angular/core';
import {Evenement} from "../Evenement";
import {ApiDodleMe} from "../api-dodleme";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lister-evenements',
  templateUrl: './lister-evenements.component.html',
  styleUrls: ['./lister-evenements.component.css']
})
export class ListerEvenementsComponent implements OnInit {
  evenements: Evenement[];
  constructor(private apiDodleMe: ApiDodleMe,
              private router: Router) { }

  clearAllEvents() {
    this.apiDodleMe.clearAllEvents();
    this.evenements = [];
  }

  ngOnInit(): void {
    this.apiDodleMe.recupererListe().subscribe((data) => {
      if (data) {
        this.evenements = data;
      }
    });
  }
}
