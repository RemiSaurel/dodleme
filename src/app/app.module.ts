import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { CreerEvenementComponent } from './creer-evenement/creer-evenement.component';
import { ListerEvenementsComponent } from './lister-evenements/lister-evenements.component';
import {FormsModule} from "@angular/forms";
import {ApiDodleMe} from "./api-dodleme";
import { HttpClientModule } from '@angular/common/http';
import { UserLoginComponent } from './user-login/user-login.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const appRoutes: Routes = [
  // 1 route par module
  {path: 'create', component: CreerEvenementComponent},
  {path: 'events', component: ListerEvenementsComponent},
  {path: 'login', component: UserLoginComponent },
  // Spécifie le chemin d'erreur et le chemin par défaut
  {path: '**' , redirectTo:"/login",pathMatch:'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CreerEvenementComponent,
    ListerEvenementsComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [ApiDodleMe],
  bootstrap: [AppComponent]
})
export class AppModule { }
