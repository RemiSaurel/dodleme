import { Component, OnInit } from '@angular/core';
import {Evenement} from "../Evenement";
import {ApiDodleMe} from "../api-dodleme";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-creer-evenement',
  templateUrl: './creer-evenement.component.html',
  styleUrls: ['./creer-evenement.component.css']
})
export class CreerEvenementComponent implements OnInit {
  evenement: Evenement;

  constructor(private apiDodleMe: ApiDodleMe,
              private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.evenement = new Evenement();
  }

  valider(){
    this.apiDodleMe.ajouterEvent(this.evenement)
  }

}
