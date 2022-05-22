import {Component, Input, OnInit} from '@angular/core';
import { User } from "../User";
import {AppComponent} from "../app.component";

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User;

  erreurLogin: boolean = false;
  erreurSignUp: boolean = false;

  inscriptionForm: boolean = false;

  constructor(private appComponent: AppComponent) {
    this.user = new User()
  }

  afficherInscription() {
    this.inscriptionForm = true;
  }

  afficherConnexion() {
    this.inscriptionForm = false;
  }

  ngOnInit(): void {
  }

  connection() {
    this.erreurSignUp = false;
    if (!this.appComponent.connexion(this.user)) {
      this.erreurLogin = true;
    };
  }

  inscription() {
    this.erreurLogin = false;
    if (!this.appComponent.inscription(this.user)) {
      this.erreurSignUp = true;
    };
  }
}
