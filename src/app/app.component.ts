import {Component} from '@angular/core';
import {ApiDodleMe} from "./api-dodleme";
import {User} from "./User";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dodleme';
  isLogged : boolean = false;
  user: User;

  constructor(private apiDodleMe: ApiDodleMe,
              private router: Router) {
    this.user = new User();
  }

  getUser() : User {
    return this.user;
  }

  checkLogin(user: User, data: User) : boolean {
    if (user.username === data.username){
      this.isLogged = true;
      this.router.navigate(['/events'])
      this.user = data;
      return true;
    } else {
      this.isLogged = false;
      return false;
    }
  }

  getAllUsers() : Observable<User[]> {
    return this.apiDodleMe.getAllUsers()
  }

  connexion(user: User) : boolean {
    this.apiDodleMe.connexionUtilisateur(user).subscribe(data => {
      return this.checkLogin(user, data);
    });
    return false;
  }

  inscription(user: User) : boolean {
    this.apiDodleMe.inscriptionUtilisateur(user).subscribe( data => {
      return this.checkLogin(user, data);
    });
    return false;
  }
}
