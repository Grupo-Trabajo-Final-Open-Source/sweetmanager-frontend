import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {BaseFormComponent} from "../../../shared/components/base-form.component";
import {CompanyService} from "../../services/company/company.service";
import {SignUpRequest} from "../../models/authentication/sign-up.request";
import {Company} from "../../models/company/company.entity";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrl: './register-view.component.css'
})
export class RegisterViewComponent extends BaseFormComponent implements OnInit {

  form!: FormGroup;

  submitted= false;

  constructor(private builder: FormBuilder, private authenticationService: AuthenticationService, private companyService: CompanyService, private router: Router) {
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
      ruc: ruc
    }

    localStorage.setItem('company', JSON.stringify(company));

    console.log(company);

    let user = {
      name: completeName,
      email: email,
      password: password,
      company: 0,
      roles: ['ROLE_MANAGER']
    }

    localStorage.setItem('newUser', JSON.stringify(user));

    localStorage.setItem('validation', 'true');

    console.log(user);

    const signUpRequest = new SignUpRequest(user.name, user.email, user.password, user.roles, user.company);

    this.authenticationService.signUp(signUpRequest);

    this.submitted = true;

    this.router.navigate(['/payment/subscription']).then();
  }
}
