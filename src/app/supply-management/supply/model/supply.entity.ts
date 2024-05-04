export class Supply {
  id: number;
  product: string;
  quantity: number;
  address: string;
  expire: string;

  constructor() {
    this.id = 0;
    this.product = '';
    this.quantity = 0;
    this.address = '';
    this.expire = '';
  }
}
