import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReportsViewComponent } from './dashboard/charts/pages/reports-view/reports-view.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { MonthlyExpensesComponent } from './dashboard/charts/components/monthly-expenses/monthly-expenses.component';
import { MonthlyIncomeComponent } from './dashboard/charts/components/monthly-income/monthly-income.component';
import { RoomChartComponent } from './dashboard/charts/components/room-chart/room-chart.component';
import {SuppliesComponent} from "./supply-management/supply/pages/supplies/supplies.component";
import {
  SupplyCreateAndEditComponent
} from "./supply-management/supply/components/supply-create-and-edit/supply-create-and-edit.component";
import { BaseChartDirective } from 'ng2-charts';
import { Chart, LineController, LinearScale, CategoryScale, PointElement, LineElement, BarController } from 'chart.js';


import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatIcon} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import { RoomCreateAndEditComponent } from './monitoring/rooms/components/room-create-and-edit/room-create-and-edit.component';
import { RoomManagementComponent } from './monitoring/rooms/pages/room-management/room-management.component';
import { AccessViewComponent } from './iam/components/access-view/access-view.component';
import { LoginViewComponent } from './iam/components/login-view/login-view.component';
import { RegisterViewComponent } from './iam/components/register-view/register-view.component';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import { NotificationTableComponent } from './interaction/components/notification-table/notification-table.component';
import { LanguageSwitcherComponent } from './public/components/language-switcher/language-switcher.component';
import {Observable} from "rxjs";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { ToolbarContentComponent } from './public/components/toolbar-content/toolbar-content.component';
import {
    CompanyWorkersViewComponent
} from "./profile/company-workers/pages/company-workers-view/company-workers-view.component";
import {ProfileViewComponent} from "./profile/profile/pages/profile-view/profile-view.component";

import { CardPaymentComponent } from './payment/components/card-payment/card-payment.component';
import { CardSubscriptionComponent } from './payment/components/card-subscription/card-subscription.component';

import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {DatePipe} from "@angular/common";


Chart.register(LineController, LinearScale, CategoryScale, PointElement, LineElement, BarController);

export class TranslateHttpLoader implements TranslateLoader{
  constructor(private http: HttpClient,
              public prefix: string = '/assets/i18n/',
              public suffix: string = '.json') {
  }

  public  getTranslation(lang: string): Observable<any> {
    return this.http.get(`${this.prefix}${lang}${this.suffix}`);
  }

}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);

}

@NgModule({
  declarations: [
    AppComponent,
    SuppliesComponent,
    SupplyCreateAndEditComponent,
    RoomCreateAndEditComponent,
    RoomManagementComponent,
    MonthlyExpensesComponent,
    MonthlyIncomeComponent,
    RoomChartComponent,
    ReportsViewComponent,
    AccessViewComponent,
    LoginViewComponent,
    RegisterViewComponent,
    NotificationTableComponent,
    LanguageSwitcherComponent,
    ToolbarContentComponent,
    CardPaymentComponent,
    CardSubscriptionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatTable,
    MatSort,
    MatColumnDef,
    MatHeaderCellDef,
    MatHeaderCell,
    MatCellDef,
    MatCell,
    MatSortHeader,
    MatIcon,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatPaginator,
    FormsModule,
    MatFormField,
    MatInput,
    MatButton,
    MatAnchor,
    MatToolbar,
    BaseChartDirective,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatTabGroup,
    MatTab,
    MatCheckbox,
    MatButtonToggle,
    MatLabel,
    TranslateModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatButtonToggleGroup,
    CompanyWorkersViewComponent,
    ProfileViewComponent,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconButton
  ],
  providers: [
    DatePipe,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
