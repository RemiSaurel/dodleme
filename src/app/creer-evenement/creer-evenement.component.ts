import { Component, OnInit } from '@angular/core';
import {Evenement} from "../Evenement";
import {ApiDodleMe} from "../api-dodleme";
import {HttpClient} from "@angular/common/http";
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import {Creneau} from "../Creneau";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-creer-evenement',
  templateUrl: './creer-evenement.component.html',
  styleUrls: ['./creer-evenement.component.css']
})
export class CreerEvenementComponent implements OnInit {
  faPlus = faPlus;
  faTrash = faTrash;

  mindate =  new Date().toISOString().split("T")[0];

  evenement: Evenement;

  constructor(private apiDodleMe: ApiDodleMe,
              private httpClient: HttpClient,
              private appComponent: AppComponent) { }

  ngOnInit(): void {
    this.evenement = new Evenement();
    this.evenement.createur = this.appComponent.user.username;
  }

  titreOK(): boolean {
    return this.evenement.titre !== undefined
      && this.evenement.titre.trim() !== "";
  }

  creneauOK(creneau: Creneau) : boolean {
    return Object.keys(creneau).length === Creneau.NB_PROPRIETES_OBLIGATOIRES_CRENEAU;
  }

  creneauxOK(creneaux: Creneau[]): boolean {
     if (creneaux.length == 0) {
       return false;
     } else {
       for (const creneau of creneaux) {
         if (!this.creneauOK(creneau)){
           return false;
         }
       }
     }
     return true;
  }

  eventOk(): boolean {
    return this.titreOK() && this.creneauxOK(this.evenement.creneaux);
  }

  clearInputs() {
    this.evenement.titre = ""
    this.evenement.description = ""
    this.evenement.creneaux = [];
  }

  valider(){
    if (this.eventOk()) {
      this.apiDodleMe.ajouterEvent(this.evenement)
      this.clearInputs();
      document.getElementById("error_form")?.classList.add("d-none");
      document.getElementById("event_ok")?.classList.remove("d-none");
    } else {
      document.getElementById("error_form")?.classList.remove("d-none");
    }
  }

  ajouterCreneau() {
    this.evenement.creneaux.push(new Creneau())
  }

  supprimerCreneau(creneau: Creneau) {
    this.evenement.creneaux.splice(this.evenement.creneaux.indexOf(creneau), 1);
  }
}
