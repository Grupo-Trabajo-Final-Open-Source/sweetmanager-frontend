import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-subscription',
  templateUrl: './card-subscription.component.html',
  styleUrl: './card-subscription.component.css'
})
export class CardSubscriptionComponent {

  id: number = 0;

  constructor(private router: Router){

  }

  navigateToPaymentBasic(){
    this.id = 1;
    localStorage.setItem('idSubscription', this.id.toString());
    this.router.navigate(['/payment/management']);
  }

  navigateToPaymentRegular(){
    this.id = 2;
    localStorage.setItem('idSubscription', this.id.toString());
    this.router.navigate(['/payment/management']);
  }

  navigateToPaymentPremium() {
    this.id = 3;
    localStorage.setItem('idSubscription', this.id.toString());
    this.router.navigate(['/payment/management']);
  }

}
