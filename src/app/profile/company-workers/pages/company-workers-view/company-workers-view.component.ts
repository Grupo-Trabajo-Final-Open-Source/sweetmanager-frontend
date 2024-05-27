import { Component } from '@angular/core';

@Component({
  selector: 'app-company-workers-view',
  templateUrl: './company-workers-view.component.html',
  styleUrl: './company-workers-view.component.css'
})
export class CompanyWorkersViewComponent {
  options = [
    {path: '/monitoring/rooms', title: 'Room Management'},
    {path: '/dashboard/panel', title: 'Reports View'},
    {path: '/supply-management/supplies', title: 'Supplies'},
    {path: 'profile/company', title: 'My Company'},
    {path: 'profile/user', title: 'My profile'}
  ]
  constructor() {
  }
}
