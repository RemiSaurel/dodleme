import {Component, Input, OnInit} from '@angular/core';
import { User } from "../User";
import {AppComponent} from "../app.component";

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  // Le user logged
  user: User;

  // Cas d'erreurs
  erreurLogin: boolean = false;
  erreurSignUp: boolean = false;

  // Pour switch entre inscription et connexion
  inscriptionForm: boolean = false;

  constructor(private appComponent: AppComponent) {
    this.user = new User()
  }

  ngOnInit(): void {
  }

  afficherInscription() {
    this.inscriptionForm = true;
  }

  afficherConnexion() {
    this.inscriptionForm = false;
  }

  // Connexion avec le back
  connection() {
    this.erreurSignUp = false;
    if (!this.appComponent.connexion(this.user)) {
      this.erreurLogin = true;
    };
  }

  // Inscription avec le back
  inscription() {
    this.erreurLogin = false;
    if (!this.appComponent.inscription(this.user)) {
      this.erreurSignUp = true;
    };
  }
}
