import { Component, OnInit } from '@angular/core';
import {ApiDodleMe} from "../api-dodleme";
import {User} from "../User";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent implements OnInit {

  users: User[];

  constructor(private apiDodleMe: ApiDodleMe,
              private appComponent: AppComponent) { }

  ngOnInit(): void {
    this.appComponent.getAllUsers().subscribe(data => {
      this.users = data;
    })
  }

  clearAllUsers() {
    this.apiDodleMe.clearAllUsers();
    this.users = [];
  }

  clearUser(user: User) {
    this.apiDodleMe.clearUser(user).subscribe(data => {
      this.users = data;
    })
  }

}
