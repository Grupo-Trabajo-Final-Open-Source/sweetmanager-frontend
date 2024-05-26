import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Supply} from "../../model/supply.entity";
import {MatTableDataSource} from "@angular/material/table";
import {SupplyService} from "../../services/supply.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrl: './supplies.component.css',
})
export class SuppliesComponent implements OnInit, AfterViewInit {
  // Attributes
  options = [
    {path: '/monitoring/rooms', title: 'Room Management'},
    {path: '/dashboard/panel', title: 'Reports View'},
    {path: '/supply-management/supplies', title: 'Supplies'}
  ]
  supplyData: Supply;
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'product', 'quantity', 'address', 'expire', 'actions'];
  @ViewChild(MatPaginator, { static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false}) sort!: MatSort;
  isEditMode: boolean;
  filterValue: string = '';

  //Constructor
  constructor(private supplyService: SupplyService) {
    this.isEditMode = false;
    this.supplyData = {} as Supply;
    this.dataSource = new MatTableDataSource<any>();
  }
  // Validate Method
  isValidSupply(element: Supply): boolean {
    if (!element.product || !element.quantity || !element.address || !element.expire){
      return false;
    }
    else {
      return true
    }
  }
  // Private Methods
  private resetEditState(): void {
    this.isEditMode = false;
    this.supplyData = {} as Supply;
  }

  //CRUDs
  private getAllSupplies(){
    this.supplyService.getAll().subscribe((response: any)=>{
      this.dataSource.data = response;
    });
  };
  private createSupply(){
    if (this.isValidSupply(this.supplyData)) {
      this.supplyService.create(this.supplyData).subscribe((response: any) => {
        this.dataSource.data.push({...response});
        this.dataSource.data = this.dataSource.data.map((supply: Supply) => {
          return supply;
        });
      });
    } else {
      console.error('All fields must be filled to create a supply.');
    }
  };
  private updateSupply(){
    if(this.isValidSupply(this.supplyData)){
      let supplyToUpdate = this.supplyData;
      this.supplyService.update(this.supplyData.id, supplyToUpdate).subscribe((response: any)=>{
        this.dataSource.data = this.dataSource.data.map((supply: Supply)=>{
          if(supply.id === response.id){
            return response;
          }
          return supply;
        });
      });
    } else {
      console.error('All fields must be filled to update a supply.');
    }
  };
  private deleteSupply(supplyId: number) {
    this.supplyService.delete(supplyId).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((supply: Supply) => {
        return supply.id !== supplyId ? supply : false;
      });
    });
  };

  //UI Events
  onEditItem(element: Supply){
    this.isEditMode = true;
    this.supplyData = element;
  }
  onDeleteItem(element: Supply){
    this.deleteSupply(element.id);
  }
  onCancelEdit(){
    this.resetEditState();
    this.getAllSupplies();
  }
  onSupplyAdded(element: Supply){
    this.supplyData = element;
    this.createSupply();
    this.resetEditState();
  }
  onSupplyUpdated(element: Supply){
    this.supplyData = element;
    this.updateSupply();
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
    this.getAllSupplies();
  }
}
