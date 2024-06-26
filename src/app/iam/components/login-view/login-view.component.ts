import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";
import {BaseFormComponent} from "../../../shared/components/base-form.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {SignInRequest} from "../../models/authentication/sign-in.request";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.css'
})
export class LoginViewComponent extends BaseFormComponent implements OnInit{

  form!: FormGroup;

  submitted = false;

  constructor(private builder: FormBuilder, private authenticationService: AuthenticationService) {
    super();
  }


  /*logIn() {

    this.userService.getUsers()
      .subscribe((users: any) => {

        this.listUsers = users;

        let user = this.listUsers.find(u => u.email == this.emailUser && u.password == this.passwordUser)

        console.log(user);

        if(user != null){
          alert('Successfully logged in!')
          this.router.navigate(['/dashboard/panel']);
        }
        else{
          alert('User not found!')
        }
      })
  }*/

  ngOnInit(): void {
    this.form = this.builder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    if (this.form.invalid) return;
    let email = this.form.value.email;
    let password = this.form.value.password;
    const signInRequest = new SignInRequest(email, password);
    this.authenticationService.signIn(signInRequest);
    this.submitted = true;
  }

}
