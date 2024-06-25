export class Supplier {
  id: number;
  name: string;
  contact: string;
  address: string;
  suppliedProduct: string;

  constructor(id = 0, name = '', contact = '', address = '', suppliedProduct = '') {
    this.id = id;
    this.name = name;
    this.contact = contact;
    this.address = address;
    this.suppliedProduct = suppliedProduct;
  }
}
