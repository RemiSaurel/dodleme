export class User {
  _id: string;
  username : string;
  nom : string;
  prenom : string

  public User() {
    this.username = "";
    this.nom = "";
    this.prenom = "";
  }
}
