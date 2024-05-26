export class SubscriptionEntity {
  id: number;
  title: string;
  price: number;
  expirationDate: Date;
  description: string;

  constructor(){
    this.id = 0;
    this.title = '';
    this.price = 0;
    this.expirationDate = new Date();
    this.description = '';
  }

}
