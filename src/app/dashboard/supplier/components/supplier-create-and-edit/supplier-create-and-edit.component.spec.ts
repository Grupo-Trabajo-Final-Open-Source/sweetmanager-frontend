import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierCreateAndEditComponent } from './supplier-create-and-edit.component';

describe('SupplierCreateAndEditComponent', () => {
  let component: SupplierCreateAndEditComponent;
  let fixture: ComponentFixture<SupplierCreateAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplierCreateAndEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplierCreateAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
