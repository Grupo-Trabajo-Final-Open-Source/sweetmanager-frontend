import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-company-logo',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './company-logo.component.html',
  styleUrl: './company-logo.component.css'
})
export class CompanyLogoComponent {

}
