export class Supplier {
  id: number;
  name: string;
  contact: string;
  address: string;
  product: string;

  constructor(id = 0, name = '', contact = '', address = '', product = '') {
    this.id = id;
    this.name = name;
    this.contact = contact;
    this.address = address;
    this.product = product;
  }
}
