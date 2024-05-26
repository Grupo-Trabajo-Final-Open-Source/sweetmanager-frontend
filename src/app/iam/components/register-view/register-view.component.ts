import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {CompanyService} from "../../services/company.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrl: './register-view.component.css'
})
export class RegisterViewComponent {
  companyName: string = '';

  ruc: string = '';

  emailUser: string = '';

  passwordUser: string = '';

  completeNameUser : string = '';


  constructor(private userService: UserService, private companyService: CompanyService, private router: Router) {
  }

  register() {
    let company = {
      name: this.companyName,
      ruc: this.ruc,
      employees: []
    }

    this.companyService.createCompany(company)
      .subscribe((company: any) => {
        console.log(company);
        let user = {
          name: this.completeNameUser,
          email: this.emailUser,
          password: this.passwordUser,
          company: company.id,
          role: 'MANAGER'
        }

        this.userService.createUser(user)
          .subscribe((user: any) => {
            console.log(user);
            alert('User created correctly!')
            this.router.navigate(['/payment/management']);
          })
      })
  }
}
