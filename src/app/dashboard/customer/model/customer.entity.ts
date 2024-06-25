export class Customer {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  reservationDate: string;
  reservationTime: string;
  cost: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.email = '';
    this.phoneNumber = '';
    this.reservationDate = '';
    this.reservationTime = '';
    this.cost = 0;
  }
}
