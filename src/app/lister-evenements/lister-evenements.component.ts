import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Evenement} from "../Evenement";
import {ApiDodleMe} from "../api-dodleme";
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";
import {Creneau} from "../Creneau";
import {NgbActiveModal, NgbModal, NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import { Subject} from "rxjs";
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-lister-evenements',
  templateUrl: './lister-evenements.component.html',
  styleUrls: ['./lister-evenements.component.css']
})
export class ListerEvenementsComponent implements OnInit {
  public evenements: Evenement[];
  username: string = this.appComponent.user.username;

  // Pour les notifications lors d'une action
  notification = '';
  typeNotif = '';

  // Pour switch entre les events archivés et les classiques
  listerEventClosed = false;

  private _success = new Subject<string>();
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;

  constructor(private apiDodleMe: ApiDodleMe,
              private router: Router,
              private appComponent: AppComponent,
              private modalService: NgbModal) { }


  // Récupère tous les events depuis le back
  ngOnInit(): void {
    this.apiDodleMe.getAllEvents().subscribe((data) => {
      if (data) {
        this.evenements = data;
      }
    });

    this._success.subscribe(message => this.notification = message);
    this._success.pipe(debounceTime(3000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  // Click sur le bouton créneau final
  definirCreneauFinal(creneau: Creneau, event: Evenement) {
    this.apiDodleMe.definirCreneauFinal(creneau, event).subscribe(data => {
      this.evenements = data;
    })
    this.typeNotif = "success";
    this.notification = "Événement clos, youhou ! 🎉"
    this.afficherNotif();
  }

  // Pour récupérer un info créneau, sert de DEBUG
  getCreneau(creneau: Creneau) {
    this.apiDodleMe.getInfoCreneau(creneau).subscribe(creneau => {
      console.log(creneau)
    });
  }

  // Permet d'ajouter un utilisateur à un event, en fonction de son choix
  addUserToEvent(event: Evenement, creneau : Creneau, estOK : boolean) {
    // Si estOK pour ce créneau ET pas présent dans participants_OK
    // OU
    // Si pasOK pour ce créneau ET pas présent dans participants_NOT_OK
    if (estOK && Object.values(creneau.participants.participants_OK).indexOf(this.username) == -1
      || !estOK && Object.values(creneau.participants.participants_NOT_OK).indexOf(this.username) == -1) {
      this.apiDodleMe.addUserToEvent(event._id, creneau._id, this.username, estOK).subscribe(data => {
        this.evenements = data;
      })
    }

    if (estOK) {
      this.typeNotif = "success";
    } else if (!estOK) {
      this.typeNotif = "warning";
    }
    this.notification = "Votre réponse a été prise en compte."
    this.afficherNotif();
  }

  // Permet de supprimer un événement
  clearEvent(event: Evenement) {
    this.apiDodleMe.clearEvent(event).subscribe( data => {
      this.evenements = data;
    })
  }

  // Pour la modal
  open(creneau : Creneau) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.creneau = creneau;
  }

  afficherNotif() { this._success.next(this.notification) }
}


@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './lister-participants-creneau.html'
})

export class NgbdModalContent {
  creneau : Creneau;
  constructor(public activeModal: NgbActiveModal) {}
}
