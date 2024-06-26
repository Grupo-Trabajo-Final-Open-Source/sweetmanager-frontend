import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Customer} from "../../model/customer.entity";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-customer-create-and-edit',
  templateUrl: './customer-create-and-edit.component.html',
  styleUrl: './customer-create-and-edit.component.css'
})
export class CustomerCreateAndEditComponent {
  // Attributes
  @Input() customer: Customer;
  @Input() editMode = false;
  @Output() customerAdded = new EventEmitter<Customer>();
  @Output() customerUpdated = new EventEmitter<Customer>();
  @Output() editCanceled = new EventEmitter();
  @ViewChild('customerForm', {static: false}) customerForm!: NgForm;

  // Methods
  constructor() {
    this.customer = {} as Customer;
  }

  // Private methods
  private resetEditState() {
    this.customer = {} as Customer;
    this.editMode = false;
    this.customerForm.resetForm();
  }

  // Event Handlers
  clearReservationDate() {
    this.customer.reservationDate = '';
  }

  onSubmit() {
    if (this.customerForm.form.valid) {
      let emitter = this.editMode ? this.customerUpdated : this.customerAdded;
      // Emit the current customer
      emitter.emit(this.customer);
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
