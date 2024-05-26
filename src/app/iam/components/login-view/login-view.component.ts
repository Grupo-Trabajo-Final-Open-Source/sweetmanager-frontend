import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.entity";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.css'
})
export class LoginViewComponent {
  emailUser: string = '';

  passwordUser: string = '';

  listUsers : Array<User> = [];

  constructor(private userService: UserService, private router: Router) {
  }


  logIn() {

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
  }


}
