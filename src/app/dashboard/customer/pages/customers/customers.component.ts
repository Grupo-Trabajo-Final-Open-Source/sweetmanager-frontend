import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from "../../model/customer.entity";
import {MatTableDataSource} from "@angular/material/table";
import {CustomerService} from "../../services/customer.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent implements OnInit, AfterViewInit {
  // Attributes
  options = [
    {path: '/monitoring/rooms', title: 'Room Management'},
    {path: '/dashboard/panel', title: 'Reports View'},
    {path: '/dashboard/customers', title: 'Customers'},
    {path: '/profile/company', title: 'My Company'},
    {path: '/profile/user', title: 'My profile'}
  ]
  customerData: Customer;
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'email', 'phoneNumber', 'reservationDate', 'reservationTime', 'cost', 'actions'];
  @ViewChild(MatPaginator, { static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false}) sort!: MatSort;
  isEditMode: boolean;
  filterValue: string = '';

  //Constructor
  constructor(private customerService: CustomerService) {
    this.isEditMode = false;
    this.customerData = {} as Customer;
    this.dataSource = new MatTableDataSource<any>();
  }
  // Validate Method
  isValidCustomer(element: Customer): boolean {
    if (!element.name || !element.email || !element.phoneNumber || !element.reservationDate || !element.reservationTime || !element.cost){
      return false;
    }
    else {
      return true
    }
  }
  // Private Methods
  private resetEditState(): void {
    this.isEditMode = false;
    this.customerData = {} as Customer;
  }

  //CRUDs
  private getAllCustomers(){
    this.customerService.getAll().subscribe((response: any)=>{
      this.dataSource.data = response;
    });
  };
  private createCustomer(){
    if (this.isValidCustomer(this.customerData)) {
      this.customerService.create(this.customerData).subscribe((response: any) => {
        this.dataSource.data.push({...response});
        this.dataSource.data = this.dataSource.data.map((customer: Customer) => {
          return customer;
        });
      });
    } else {
      console.error('All fields must be filled to create a customer.');
    }
  };
  private updateCustomer(){
    if(this.isValidCustomer(this.customerData)){
      let customerToUpdate = this.customerData;
      this.customerService.update(this.customerData.id, customerToUpdate).subscribe((response: any)=>{
        this.dataSource.data = this.dataSource.data.map((customer: Customer)=>{
          if(customer.id === response.id){
            return response;
          }
          return customer;
        });
      });
    } else {
      console.error('All fields must be filled to update a customer.');
    }
  };
  private deleteCustomer(customerId: number) {
    this.customerService.delete(customerId).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((customer: Customer) => {
        return customer.id !== customerId ? customer : false;
      });
    });
  };

  //UI Events
  onEditItem(element: Customer){
    this.isEditMode = true;
    this.customerData = element;
  }
  onDeleteItem(element: Customer){
    this.deleteCustomer(element.id);
  }
  onCancelEdit(){
    this.resetEditState();
    this.getAllCustomers();
  }
  onCustomerAdded(element: Customer){
    this.customerData = element;
    this.createCustomer();
    this.resetEditState();
  }
  onCustomerUpdated(element: Customer){
    this.customerData = element;
    this.updateCustomer();
    this.resetEditState();
  }
  applyFilter() {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

  // Lifecycle Hooks
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getAllCustomers();
  }
}
