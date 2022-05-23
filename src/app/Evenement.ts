import {Creneau} from "./Creneau";

export class Evenement {
  _id: string;
  titre: string;
  description: string;
  creneaux: Creneau[] = [];
  createur: string;
  participants: [string];
}
