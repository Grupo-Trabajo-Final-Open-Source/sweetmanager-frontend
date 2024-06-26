import { Component } from '@angular/core';

@Component({
  selector: 'app-company-workers-view',
  templateUrl: './company-workers-view.component.html',
  styleUrl: './company-workers-view.component.css'
})
export class CompanyWorkersViewComponent {
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
