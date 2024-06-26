import { Component } from '@angular/core';

@Component({
  selector: 'app-reports-view',
  templateUrl: './reports-view.component.html',
  styleUrls: ['./reports-view.component.css']
})
export class ReportsViewComponent {
  title = 'sweet-manager';

  options = [
    {path: '/dashboard/panel', title: 'Reports View'},
    {path: '/monitoring/rooms', title: 'Room Management'},
    {path: '/supply-management/supplies', title: 'Supplies'},
    {path: '/profile/company', title: 'My Company'},
    {path: '/profile/user', title: 'My profile'}
  ]
}
