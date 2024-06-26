export class User {

  id: number;

  name: string;

  password : string;

  email : string;

  companyId: number;

  roles: string;

  constructor(id = 0, name = '', password = '', email = '', company = 0, role = '') {
    this.id = id;
    this.name = name;
    this.password = password;
    this.email = email;
    this.companyId = company;
    this.roles = role;
  }

}

