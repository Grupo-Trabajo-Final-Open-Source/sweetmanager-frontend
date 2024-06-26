import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.css'
})
export class ProfileViewComponent {
  options = [
    {path: '/dashboard/panel', title: 'Reports View'},
    {path: '/monitoring/rooms', title: 'Room Management'},
    {path: '/supplier-management/suppliers', title: 'Suppliers'},
    {path: '/profile/company', title: 'My Company'},
    {path: '/profile/user', title: 'My profile'}
  ]
  constructor() {
  }
}
