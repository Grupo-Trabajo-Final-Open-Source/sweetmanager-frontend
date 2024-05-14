export class User {

  id: number;

  name: string;

  password : string;

  email : string;

  company: string;

  role: string;

  notifications: boolean;

  constructor(id = 0, name = '', password = '', email = '', company = '', role = '') {
    this.id = id;
    this.name = name;
    this.password = password;
    this.email = email;
    this.company = company;
    this.role = role;
    this.notifications = true;
  }

}

