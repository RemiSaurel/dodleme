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

  ngOnInit(): void {
    this.apiDodleMe.recupererListe().subscribe((data) => {this.evenements = data});
  }
}
