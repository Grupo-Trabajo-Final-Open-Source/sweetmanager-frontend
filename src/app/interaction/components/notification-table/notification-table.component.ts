import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-notification-table',
  templateUrl: './notification-table.component.html',
  styleUrl: './notification-table.component.css'
})
export class NotificationTableComponent {
// Attributes
  displayedColumns: string[] = ['id', 'title', 'message', 'date'];
  dataSource!:MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false}) sort!: MatSort;
  notificationData: Notification;
  // Constructor
  constructor(private notificationService: NotificationService) {
    this.notificationData = {} as Notification;
    new MatTableDataSource<any>();
  }

  // CRUD Actions
  ngOnInit() {
    this.notificationService.getNotifications().subscribe((response: any) => {
      this.dataSource = response;
      console.log(this.dataSource)
    })
  }
}
