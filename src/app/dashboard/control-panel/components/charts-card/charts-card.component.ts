import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-charts-card',
  templateUrl: './charts-card.component.html',
  styleUrl: './charts-card.component.css'
})
export class ChartsCardComponent {

  constructor(private router: Router){

  }

  redirectTo(){
    this.router.navigate(['/dashboard/charts']);
  }
}
