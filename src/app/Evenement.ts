import {Creneau} from "./Creneau";

export class Evenement {
  _id: string;
  titre: string;
  description: string;
  creneaux: Creneau[] = [];
  createur: string;
  isClosed: boolean = false;
  creneauFinal: Creneau = new Creneau();
}
