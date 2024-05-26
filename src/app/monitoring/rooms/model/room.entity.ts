export class Room {

  id: number;
  name: string;
  description: string;
  price: number;
  worker: string;
  client: string;
  totalBeds: number;
  totalBathrooms: number;
  totalTelevision: number;
  isBusy: boolean;
  status: string;

  constructor() {

    this.id = 0;
    this.name = '';
    this.description = '';
    this.price = 0;
    this.worker = '';
    this.client = '';
    this.totalBeds = 0;
    this.totalBathrooms = 0;
    this.totalTelevision = 0;
    this.isBusy = false;
    this.status = '';
  }
}
