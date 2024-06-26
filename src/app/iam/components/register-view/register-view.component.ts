import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {BaseFormComponent} from "../../../shared/components/base-form.component";
import {CompanyService} from "../../services/company/company.service";
import {SignUpRequest} from "../../models/authentication/sign-up.request";

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrl: './register-view.component.css'
})
export class RegisterViewComponent extends BaseFormComponent implements OnInit {

  form!: FormGroup;

  submitted= false;

  constructor(private builder: FormBuilder, private authenticationService: AuthenticationService, private companyService: CompanyService) {
    super();
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      companyName: ['', Validators.required],
      ruc: ['', Validators.required],
      completeName:['', Validators.required]
    });
  }

  register() {

    let companyName = this.form.value.companyName;

    let email = this.form.value.email;

    let password = this.form.value.password;

    let completeName = this.form.value.completeName;

    let ruc = this.form.value.ruc;

    if (companyName == '' || ruc == '' || email == '' || password == '' || completeName == '') {
      alert("Please fill all the fields!");
      return;
    }

    let company = {
      name: companyName,
      ruc: ruc,
      employees: []
    }

    this.companyService.createCompany(company)
      .subscribe((company: any) => {
        console.log(company);
        let user = {
          name: completeName,
          email: email,
          password: password,
          company: company.id,
          roles: ['ROLE_MANAGER']
        }

        const signUpRequest = new SignUpRequest(user.name, user.email, user.password, user.roles, user.company);

        this.authenticationService.signUp(signUpRequest);

        this.submitted = true;
      });
  }
}
