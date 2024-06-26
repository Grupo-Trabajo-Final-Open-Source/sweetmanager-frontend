import { Component } from '@angular/core';

@Component({
  selector: 'app-control-panel-view',
  templateUrl: './control-panel-view.component.html',
  styleUrl: './control-panel-view.component.css'
})
export class ControlPanelViewComponent {
  options = [
    {path: '/dashboard/panel', title: 'Reports View'},
    {path: '/monitoring/rooms', title: 'Room Management'},
    {path: '/supply-management/supplies', title: 'Supplies'},
    {path: '/profile/company', title: 'My Company'},
    {path: '/profile/user', title: 'My profile'}
  ]
}
