import { Component, OnInit } from '@angular/core';
import { User } from "../User";

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User;

  constructor() { this.user = new User() }

  ngOnInit(): void {
  }

  connection() {
    console.log("FAIRE UN CALL API POUR VERIFIER SI USER EXISTE, SI EXISTE ALORS CONNEXION, SINON ERREUR")
  }

  inscription() {
    console.log("FAIRE UN CALL API POUR VERIFIER SI USER EXISTE PAS , SI EXISTE ALORS MESSAGE, SINON CREATION COMPTE")
  }
}
