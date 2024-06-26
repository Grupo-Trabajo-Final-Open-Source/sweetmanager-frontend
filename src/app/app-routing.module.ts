import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccessViewComponent} from "./iam/components/access-view/access-view.component";
import {RoomManagementComponent} from "./monitoring/rooms/pages/room-management/room-management.component";
import {SuppliesComponent} from "./supply-management/supply/pages/supplies/supplies.component";
import {NotificationTableComponent} from "./interaction/components/notification-table/notification-table.component";
import {CardPaymentComponent} from "./payment/components/card-payment/card-payment.component";
import {CardSubscriptionComponent} from "./payment/components/card-subscription/card-subscription.component";
import {
  CompanyWorkersViewComponent
} from "./profile/company-workers/pages/company-workers-view/company-workers-view.component";
import {ProfileViewComponent} from "./profile/profile/pages/profile-view/profile-view.component";
import {
  ControlPanelViewComponent
} from "./dashboard/control-panel/pages/control-panel-view/control-panel-view.component";
import {CustomersComponent} from "./dashboard/customer/pages/customers/customers.component";
import {ReportsViewComponent} from "./dashboard/charts/pages/reports-view/reports-view.component";
import {SuppliersComponent} from "./dashboard/supplier/pages/suppliers/suppliers.component";

const routes: Routes = [
  {path: '', redirectTo: '/access-view', pathMatch: 'full'},
  {path: 'access-view', component: AccessViewComponent},
  {path: 'monitoring/rooms' , component: RoomManagementComponent},
  {path: 'dashboard/panel' , component: ControlPanelViewComponent},
  {path: 'supply-management/supplies', component: SuppliesComponent},
  {path: 'interaction/notifications', component: NotificationTableComponent},
  {path: 'payment/management', component: CardPaymentComponent},
  {path: 'payment/subscription', component: CardSubscriptionComponent},
  {path: 'profile/company', component: CompanyWorkersViewComponent},
  {path: 'profile/user', component: ProfileViewComponent},
  {path: 'dashboard/customers', component: CustomersComponent},
  {path: 'dashboard/charts', component: ReportsViewComponent},
  {path: 'dashboard/suppliers', component: SuppliersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
