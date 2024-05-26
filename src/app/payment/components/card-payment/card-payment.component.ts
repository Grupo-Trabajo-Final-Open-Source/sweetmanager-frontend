import { Component } from '@angular/core';
import {Payment} from "../../models/payment.entity";
import {UserService} from "../../../iam/services/user.service";
import {Router} from "@angular/router";
import {User} from "../../../iam/models/user.entity";
import {Subscription} from "../../models/subscription.entity";
import {SubscriptionService} from "../../services/subscription.service";
import {PaymentService} from "../../services/payment.service";

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
  expirationDate: string = '';
  cvc: number = 0;
  email: string = '';
  users: Array<User> = [];
  // Card Subscription Attributes
  subscriptionCard: any = new Subscription();
  subscriptions: Array<Subscription> = [];
  idSubscription: any = '';

  constructor(private userService: UserService, private router: Router,
              private subscriptionService: SubscriptionService,
              private paymentService: PaymentService) {
  }

  ngOnInit(){
    this.idSubscription = localStorage.getItem('idSubscription');
    this.getSubscriptionCard(); // Get the Subscription Model for Information
    this.paymentService.getPayments().subscribe((payments: any) => {
      console.log(payments);
    })
  }

  getSubscriptionCard(){
    this.subscriptionService.getSubscriptions().subscribe((subscriptions: any) => {
      this.subscriptions = subscriptions;

      this.subscriptionCard = this.subscriptions.find(s => s.id == this.idSubscription);
    })
  }

  technicalSupport(){
    if(this.idSubscription == 1){
      return "Restricted Technical Support";
    }
    else{
      return "Technical Support 24/7";
    }
  }

  pay(){
    if(this.titularName == '' || this.targetAccount == '' || this.expirationDate == null || this.cvc == 0 || this.email == '') {
      alert("Please fill all the fields!");
      return;
    }

    this.userService.getUsers().subscribe((users: any) => {
      this.users = users;

      let user = this.users.find(u => u.email == this.email);

      if(user != null){
        this.idTitular = user.id;
      }

      let payment  = {
        idTitular: this.idTitular,
        titularName: this.titularName,
        targetAccount: this.targetAccount,
        expirationDate: this.expirationDate,
        cvc: this.cvc,
        email: this.email
      }

      this.paymentService.createPayment(payment).subscribe((payment: any) => {
        console.log(payment);
      })
    })

    alert("Pago realizado correctamente!")

    this.router.navigate(['/access-view']);
  }
}
