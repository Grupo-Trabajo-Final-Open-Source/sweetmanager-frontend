import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccessViewComponent} from "./iam/components/access-view/access-view.component";
import {RoomManagementComponent} from "./monitoring/rooms/pages/room-management/room-management.component";
import {ReportsViewComponent} from "./dashboard/charts/pages/reports-view/reports-view.component";
import {SuppliesComponent} from "./supply-management/supply/pages/supplies/supplies.component";
import {NotificationTableComponent} from "./interaction/components/notification-table/notification-table.component";

const routes: Routes = [
  {path: '', redirectTo: '/access-view', pathMatch: 'full'},
  {path: 'access-view', component: AccessViewComponent},
  {path: 'monitoring/rooms' , component: RoomManagementComponent},
  {path: 'dashboard/panel' , component: ReportsViewComponent},
  {path: 'supply-management/supplies', component: SuppliesComponent},
  {path: 'interaction/notifications', component: NotificationTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
