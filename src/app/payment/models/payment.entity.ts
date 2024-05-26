export class Payment {
  id: number;
  idTitular: number;
  titularName: string;
  targetAccount: string;
  expirationDate: string;
  cvc: number;
  email: string;

  constructor(id: number = 0, titularName: string = '', targetAccount: string = '', expirationDate: string = '', cvc: number = 0, email: string = '', idTitular: number = 0) {
    this.id = id;
    this.idTitular = idTitular;
    this.titularName = titularName;
    this.targetAccount = targetAccount;
    this.expirationDate = expirationDate;
    this.cvc = cvc;
    this.email = email;
  }
}
