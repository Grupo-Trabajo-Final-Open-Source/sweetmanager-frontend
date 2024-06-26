import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Supplier} from "../../models/supplier.entity";

@Component({
  selector: 'app-supplier-create-and-edit',
  templateUrl: './supplier-create-and-edit.component.html',
  styleUrls: ['./supplier-create-and-edit.component.css']
})
export class SupplierCreateAndEditComponent {
  // Attributes
  @Input() supplier: Supplier;
  @Input() editMode = false;
  @Output() supplierAdded = new EventEmitter<Supplier>();
  @Output() supplierUpdated = new EventEmitter<Supplier>();
  @Output() editCanceled = new EventEmitter();
  @ViewChild('supplierForm', {static: false}) supplierForm!: NgForm;

  // Methods
  constructor() {
    this.supplier = {} as Supplier;
  }

  // Private methods
  private resetEditState() {
    this.supplier = {} as Supplier;
    this.editMode = false;
    this.supplierForm.resetForm();
  }

  // Event Handlers
  onSubmit() {
    if (this.supplierForm.form.valid) {
      let emitter = this.editMode ? this.supplierUpdated : this.supplierAdded;
      emitter.emit(this.supplier);
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
