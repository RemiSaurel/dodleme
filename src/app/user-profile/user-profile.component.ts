import { Component, OnInit } from '@angular/core';
import {User} from "../User";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;

  constructor(private appComponent: AppComponent) { }

  ngOnInit(): void {
    this.user = this.appComponent.getUser();
  }

}
