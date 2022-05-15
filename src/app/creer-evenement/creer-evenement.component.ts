import { Component, OnInit } from '@angular/core';
import {Evenement} from "../Evenement";

@Component({
  selector: 'app-creer-evenement',
  templateUrl: './creer-evenement.component.html',
  styleUrls: ['./creer-evenement.component.css']
})
export class CreerEvenementComponent implements OnInit {
  evenement: Evenement;
  constructor() { }

  ngOnInit(): void {
    this.evenement = new Evenement();
  }

}
