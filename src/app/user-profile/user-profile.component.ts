import {Component, Input, OnInit} from '@angular/core';
import {User} from "../User";
import {AppComponent} from "../app.component";
import {ApiDodleMe} from "../api-dodleme";
import {Evenement} from "../Evenement";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;
  eventcrees: boolean = true;
  evenements_crees: Evenement[];
  evenements_participes: Evenement[];


  constructor(private appComponent: AppComponent,
              private apiDodleMe: ApiDodleMe) { }

  ngOnInit(): void {
    this.user = this.appComponent.getUser();
    if (this.user.username !== undefined) {
      this.apiDodleMe.getEventsCrees(this.user).subscribe(evenements => {
        console.log(evenements)
        this.evenements_crees = evenements;
      });
      this.apiDodleMe.getEventsParticipes(this.user).subscribe(evenements => {
        console.log(evenements)
        this.evenements_participes = evenements;
      });
    }

  }
}
