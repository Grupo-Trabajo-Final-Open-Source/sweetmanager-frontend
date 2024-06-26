import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrl: './client-card.component.css'
})
export class ClientCardComponent {
  constructor(private router: Router){

  }

  redirect(){
    this.router.navigate(['/dashboard/customers']);
  }
}
