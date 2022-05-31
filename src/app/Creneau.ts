export class Creneau {

  public static readonly NB_PROPRIETES_OBLIGATOIRES_CRENEAU = 4;

  _id: string
  date_debut: string
  date_fin: string
  heure_debut: string
  heure_fin: string
  participants: {
    participants_OK: [string],
    participants_NOT_OK: [string]
  }
}
