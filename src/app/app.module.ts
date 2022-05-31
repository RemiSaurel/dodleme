import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { CreerEvenementComponent } from './creer-evenement/creer-evenement.component';
import {ListerEvenementsComponent, NgbdModalContent} from './lister-evenements/lister-evenements.component';
import {FormsModule} from "@angular/forms";
import {ApiDodleMe} from "./api-dodleme";
import { HttpClientModule } from '@angular/common/http';
import { UserLoginComponent } from './user-login/user-login.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsersAdminComponent } from './users-admin/users-admin.component';
import { EventsCreesComponent } from './user-profile/events-crees/events-crees.component';
import { EventsParticipesComponent } from './user-profile/events-participes/events-participes.component';
import { CardEventComponent } from './card-event/card-event.component';
import {NgbAlertModule} from "@ng-bootstrap/ng-bootstrap";

const appRoutes: Routes = [
  // 1 route par module
  {path: 'create', component: CreerEvenementComponent},
  {path: 'events', component: ListerEvenementsComponent},
  {path: 'login', component: UserLoginComponent },
  {path: 'profile', component: UserProfileComponent },
  {path: 'users', component: UsersAdminComponent },

  // Spécifie le chemin d'erreur et le chemin par défaut
  {path: '**', redirectTo:"/login" ,pathMatch:'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CreerEvenementComponent,
    ListerEvenementsComponent,
    UserLoginComponent,
    UserProfileComponent,
    UsersAdminComponent,
    EventsCreesComponent,
    EventsParticipesComponent,
    CardEventComponent,
    NgbdModalContent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbAlertModule
  ],
  providers: [ApiDodleMe],
  bootstrap: [AppComponent]
})
export class AppModule { }
