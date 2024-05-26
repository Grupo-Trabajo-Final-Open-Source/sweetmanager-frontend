import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Supply} from "../../model/supply.entity";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-supply-create-and-edit',
  templateUrl: './supply-create-and-edit.component.html',
  styleUrl: './supply-create-and-edit.component.css'
})
export class SupplyCreateAndEditComponent {
  // Attributes
  @Input() supply: Supply;
  @Input() editMode = false;
  @Output() supplyAdded = new EventEmitter<Supply>();
  @Output() supplyUpdated = new EventEmitter<Supply>();
  @Output() editCanceled = new EventEmitter();
  @ViewChild('supplyForm', {static: false}) supplyForm!: NgForm;

  // Methods
  constructor() {
    this.supply = {} as Supply;
  }

  // Private methods
  private resetEditState() {
    this.supply = {} as Supply;
    this.editMode = false;
    this.supplyForm.resetForm();
  }

  clearExpireDate(){
    this.supply.expire = '';
  }

  // Event Handlers
  onSubmit() {
    if (this.supplyForm.form.valid) {
      let emitter = this.editMode ? this.supplyUpdated : this.supplyAdded;
      emitter.emit(this.supply);
      this.resetEditState();
    } else {
      console.error('Invalid data in form');
    }
  }
  onCancel() {
    this.editCanceled.emit();
    this.resetEditState();
  }
}
