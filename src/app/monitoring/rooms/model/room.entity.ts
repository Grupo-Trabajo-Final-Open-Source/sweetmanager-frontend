export class Room {
  id: number;
  name: string;
  description: string;
  price: number;
  workName: string;
  clientName: string;
  totalBeds: number;
  totalBathroom: number;
  totalTelevision: number;
  isBusy: boolean;
  state: string;

  constructor(id : number = 0, name: string = '', description: string = '', price: number= 0, worker: string = '', client: string = '', totalBeds: number = 0, totalBathrooms: number = 0, totalTelevision: number = 0, isBusy: boolean = false, status: string = ''){
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.workName = worker;
    this.clientName = client;
    this.totalBeds = totalBeds;
    this.totalBathroom = totalBathrooms;
    this.totalTelevision = totalTelevision;
    this.isBusy = isBusy;
    this.state = status;
  }

}
