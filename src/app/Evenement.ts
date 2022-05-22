import {Creneau} from "./Creneau";

export class Evenement {
  titre: string;
  description: string;
  creneaux: Creneau[] = [];
  createur: string;
}
