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

  eventOk(): boolean {
    return  this.evenement.titre !== undefined
      && this.evenement.titre !== "";
  }

  clearInputs() {
    this.evenement.titre = ""
    this.evenement.description = ""
  }

  valider(){
    document.getElementById("event_ok")?.classList.add("d-none");
    if (this.eventOk()) {
      this.apiDodleMe.ajouterEvent(this.evenement)
      this.clearInputs();
      document.getElementById("error_titre")?.classList.add("d-none");
      document.getElementById("event_ok")?.classList.remove("d-none");
    } else {
      document.getElementById("error_titre")?.classList.remove("d-none")
    }
  }

}
