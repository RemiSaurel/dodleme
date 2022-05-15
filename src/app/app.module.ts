import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { CreerEvenementComponent } from './creer-evenement/creer-evenement.component';
import { ListerEvenementsComponent } from './lister-evenements/lister-evenements.component';
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  // 1 route par module
  {path: 'create', component: CreerEvenementComponent},
  {path: 'events', component: ListerEvenementsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CreerEvenementComponent,
    ListerEvenementsComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
