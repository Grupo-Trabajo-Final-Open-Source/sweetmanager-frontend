export class Notification {
  id: number;

  title : string;

  message : string;

  date : Date;

  constructor(id = 0, title = '', message = '', date = new Date()) {
    this.id = id;
    this.title = title;
    this.message = message;
    this.date = date;
  }

}
