import { Component } from '@angular/core';
import {ProfileImageComponent} from "../../components/profile-image/profile-image.component";
import {ProfileDetailsComponent} from "../../components/profile-details/profile-details.component";

@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [
    ProfileImageComponent,
    ProfileDetailsComponent
  ],
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.css'
})
export class ProfileViewComponent {

}
