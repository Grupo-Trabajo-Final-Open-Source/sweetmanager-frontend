export class Payment {
  idTitular: number;
  titularName: string;
  targetAccount: string;
  expirationDate: Date;
  cvc: number;
  email: string;

  constructor(titularName: string = '', targetAccount: string = '', expirationDate: Date = new Date(), cvc: number = 0, email: string = '', idTitular: number = 0) {
    this.idTitular = idTitular;
    this.titularName = titularName;
    this.targetAccount = targetAccount;
    this.expirationDate = expirationDate;
    this.cvc = cvc;
    this.email = email;
  }
}
