import {Component, ViewChild} from '@angular/core';
import {Room} from "../../model/room.entity";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {RoomControlService} from "../../services/room-control.service";

@Component({
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styleUrl: './room-management.component.css'
})
export class RoomManagementComponent {

  // Attributes
  options = [
    {path: '/monitoring/rooms', title: 'Room Management'},
    {path: '/dashboard/panel', title: 'Reports View'},
    {path: '/supply-management/supplies', title: 'Supplies'},
    {path: '/profile/company', title: 'My Company'},
    {path: '/profile/user', title: 'My profile'}
  ]
  roomData: Room;
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'worker', 'client', 'totalBeds', 'totalBathrooms', 'totalTelevision', 'status', 'actions'];
  @ViewChild(MatPaginator, { static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false}) sort!: MatSort;
  isEditMode: boolean;

  // Constructor
  constructor(private roomControlService: RoomControlService) {
    this.isEditMode = false;
    this.roomData = { } as Room;
    this.dataSource = new MatTableDataSource<any>();
  }

  // Private Methods
  private resetEditState(): void {
    this.isEditMode = false;
    this.roomData = { } as Room;
  }

  // CRUD Actions
  private getAllRooms() {
    this.roomControlService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  };

  private createRoom() {

    if (this.roomData.status === 'busy') {
      this.roomData.isBusy = true;
    }
    else if (this.roomData.status === 'not busy') {
      this.roomData.isBusy = false;
    }

    this.roomControlService.create(this.roomData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((room: Room) => { return room; });
    });
  };

  private updateRoom() {

    if (this.roomData.status === 'busy') {
      this.roomData.isBusy = true;
    }
    else if (this.roomData.status === 'not busy') {
      this.roomData.isBusy = false;
    }

    let roomToUpdate = this.roomData;
    this.roomControlService.update(this.roomData.id, roomToUpdate).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((room: Room) => {
        if (room.id === response.id) {
          return response;
        }
        return room;
      });
    });
  };

  private deleteRoom(roomId: number) {
    this.roomControlService.delete(roomId).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((room: Room) => {
        return room.id !== roomId ? room : false;
      });
    });
  };

  // UI Event Handlers
  onEditItem(element: Room) {
    this.isEditMode = true;
    this.roomData = element;
  }

  onDeleteItem(element: Room) {
    this.deleteRoom(element.id);
  }

  onCancelEdit() {
    this.resetEditState();
    this.getAllRooms();
  }

  onRoomAdded(element: Room) {
    this.roomData = element;
    this.createRoom();
    this.resetEditState();
  }

  onRoomUpdated(element: Room) {
    this.roomData = element;
    this.updateRoom();
    this.resetEditState();
  }

  // Lifecycle Hooks
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getAllRooms();
  }
}
