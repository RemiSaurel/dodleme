import { Component } from '@angular/core';

import { UserLoginComponent } from "./user-login/user-login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dodleme';
  userLogin = new UserLoginComponent();
  constructor() {
}

  userConnection() {

  }
}
