import { Component } from '@angular/core';
import {ProfileDetailsComponent} from "../../../profile/components/profile-details/profile-details.component";
import {ProfileImageComponent} from "../../../profile/components/profile-image/profile-image.component";
import {WorkersManagementComponent} from "../../components/workers-management/workers-management.component";
import {CompanyDetailsComponent} from "../../components/company-details/company-details.component";
import {CompanyLogoComponent} from "../../components/company-logo/company-logo.component";

@Component({
  selector: 'app-company-workers-view',
  standalone: true,
  imports: [
    ProfileDetailsComponent,
    ProfileImageComponent,
    WorkersManagementComponent,
    CompanyDetailsComponent,
    CompanyLogoComponent
  ],
  templateUrl: './company-workers-view.component.html',
  styleUrl: './company-workers-view.component.css'
})
export class CompanyWorkersViewComponent {

}
