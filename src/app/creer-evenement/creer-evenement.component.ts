import { Component, OnInit } from '@angular/core';
import {Evenement} from "../Evenement";
import {ApiDodleMe} from "../api-dodleme";

@Component({
  selector: 'app-creer-evenement',
  templateUrl: './creer-evenement.component.html',
  styleUrls: ['./creer-evenement.component.css']
})
export class CreerEvenementComponent implements OnInit {
  evenement: Evenement;
  constructor(private apiDodleMe: ApiDodleMe ) { }

  valider(){
    this.apiDodleMe.ajouterEvent(this.evenement)
  }

  ngOnInit(): void {
    this.evenement = new Evenement();
  }

}
