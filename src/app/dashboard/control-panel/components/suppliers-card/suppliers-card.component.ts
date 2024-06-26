import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-suppliers-card',
  templateUrl: './suppliers-card.component.html',
  styleUrl: './suppliers-card.component.css'
})
export class SuppliersCardComponent {
  constructor(private router: Router){

  }

  redirect(){
    this.router.navigate(['/dashboard/suppliers']);
  }
}
