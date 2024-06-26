import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {SupplierService} from "../../services/supplier.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Supplier} from "../../models/supplier.entity";

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css'],
})
export class SuppliersComponent implements OnInit, AfterViewInit {
  // Attributes
  options = [
    {path: '/dashboard/panel', title: 'Reports View'},
    {path: '/monitoring/rooms', title: 'Room Management'},
    {path: '/supplier-management/suppliers', title: 'Suppliers'},
    {path: '/profile/company', title: 'My Company'},
    {path: '/profile/user', title: 'My profile'}
  ]
  supplierData: Supplier;
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'contact', 'address', 'product', 'actions'];
  @ViewChild(MatPaginator, { static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false}) sort!: MatSort;
  isEditMode: boolean;
  filterValue: string = '';

  //Constructor
  constructor(private supplierService: SupplierService) {
    this.isEditMode = false;
    this.supplierData = {} as Supplier;
    this.dataSource = new MatTableDataSource<any>();
  }
  // Validate Method
  isValidSupplier(element: Supplier): boolean {
    if (!element.name || !element.contact || !element.address || !element.product){
      return false;
    }
    else {
      return true
    }
  }
  // Private Methods
  private resetEditState(): void {
    this.isEditMode = false;
    this.supplierData = {} as Supplier;
  }

  //CRUDs
  private getAllSuppliers(){
    this.supplierService.getAll().subscribe((response: any)=>{
      this.dataSource.data = response;
    });
  };
  private createSupplier() {
    if (this.isValidSupplier(this.supplierData)) {
      this.supplierService.create(this.supplierData).subscribe((response: any) => {
        this.dataSource.data.push({...response});
        this.dataSource.data = this.dataSource.data.map((supplier: Supplier) => {
          return supplier;
        });
        this.getAllSuppliers();
      });
    } else {
      console.error('All fields must be filled to create a supplier.');
    }
  }
  private updateSupplier(){
    if(this.isValidSupplier(this.supplierData)){
      let supplierToUpdate = this.supplierData;
      this.supplierService.update(this.supplierData.id, supplierToUpdate).subscribe((response: any)=>{
        this.dataSource.data = this.dataSource.data.map((supplier: Supplier)=>{
          if(supplier.id === response.id){
            return response;
          }
          return supplier;
        });
      });
    } else {
      console.error('All fields must be filled to update a supplier.');
    }
  };
  private deleteSupplier(supplierId: number) {
    this.supplierService.delete(supplierId).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((supplier: Supplier) => {
        return supplier.id !== supplierId ? supplier : false;
      });
    });
  };

  //UI Events
  onEditItem(element: Supplier){
    this.isEditMode = true;
    this.supplierData = element;
  }
  onDeleteItem(element: Supplier){
    this.deleteSupplier(element.id);
  }
  onCancelEdit(){
    this.resetEditState();
    this.getAllSuppliers();
  }
  onSupplierAdded(element: Supplier){
    this.supplierData = element;
    this.createSupplier();
    this.resetEditState();
  }
  onSupplierUpdated(element: Supplier){
    this.supplierData = element;
    this.updateSupplier();
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
    this.getAllSuppliers();
  }
}
