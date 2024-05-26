export class Subscription {
  id: number;
  title: string;
  price: number;
  description: string;

  constructor(id: number = 0, title: string = '', price: number = 0, description: string = ''){
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
  }

}
