export class PaymentEntity {
  titularName: string;
  targetAccount: string;
  expirationDate: Date;
  cvc: number;
  email: string;

  constructor(titularName: string, targetAccount: string, expirationDate: Date, cvc: number, email: string) {
    this.titularName = titularName;
    this.targetAccount = targetAccount;
    this.expirationDate = expirationDate;
    this.cvc = cvc;
    this.email = email;
  }
}
