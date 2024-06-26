export class Room {

  id: number;
  typeBedroomId: number;
  workerId: number;
  totalBeds: number;
  totalBathroom: number;
  totalTelevision: number;
  isBusy: boolean;
  state: string;

  constructor() {

    this.id = 0;
    this.typeBedroomId = 0;
    this.workerId = 0;
    this.totalBeds = 0;
    this.totalBathroom = 0;
    this.totalTelevision = 0;
    this.isBusy = false;
    this.state = '';
  }
}
