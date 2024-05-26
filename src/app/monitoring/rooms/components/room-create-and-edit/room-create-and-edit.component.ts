import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Room} from "../../model/room.entity";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-room-create-and-edit',
  templateUrl: './room-create-and-edit.component.html',
  styleUrl: './room-create-and-edit.component.css'
})
export class RoomCreateAndEditComponent {
  // Attributes
  status: string[] = ['busy','not busy'];

  @Input() room: Room;
  @Input() editMode = false;
  @Output() roomAdded = new EventEmitter<Room>();
  @Output() roomUpdated = new EventEmitter<Room>();
  @Output() editCanceled = new EventEmitter();
  @ViewChild('roomForm', {static: false}) roomForm!: NgForm;

  constructor() {
    this.room = { } as Room;
  }

  private resetEditState() {
    this.room = {} as Room;
    this.editMode = false;
    this.roomForm.resetForm();
  }

  onSubmit() {
    if (this.roomForm.form.valid) {

      let emitter = this.editMode ? this.roomUpdated : this.roomAdded;

      emitter.emit(this.room);

      this.resetEditState();
    }
    else {
      console.error('Invalid data in form');
    }
  }

  onCancel() {

    this.editCanceled.emit();
    this.resetEditState();
  }
}
