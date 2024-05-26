import { Component } from '@angular/core';
import {Payment} from "../../models/payment.entity";
import {UserService} from "../../../iam/services/user.service";
import {Router} from "@angular/router";
import {User} from "../../../iam/models/user.entity";
import {Subscription} from "../../models/subscription.entity";

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrl: './card-payment.component.css'
})
export class CardPaymentComponent {

  // Attributes
  idTitular: number = 0;
  titularName: string = '';
  targetAccount: string = '';
  expirationDate: Date = new Date();
  cvc: number = 0;
  email: string = '';
  users: Array<User> = [];
  // Card Subscription Attributes
  subscriptionCard: any = new Subscription();

  idSubscription: any = '';

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(){
    this.idSubscription = localStorage.getItem('idSubscription');
  }

  pay(){
    this.userService.getUsers().subscribe((users: any) => {
      this.users = users;

      let user = this.users.find(u => u.email == this.email);

      if(user != null){
        this.idTitular = user.id;
      }
    })

    let payment = new Payment(this.titularName, this.targetAccount, this.expirationDate, this.cvc, this.email, this.idTitular);

    console.log(payment);

    alert("Pago realizado correctamente!")

    this.router.navigate(['/access-view']);
  }
}
