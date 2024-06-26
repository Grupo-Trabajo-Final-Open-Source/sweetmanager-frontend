import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerCreateAndEditComponent } from './customer-create-and-edit.component';

describe('CustomerCreateAndEditComponent', () => {
  let component: CustomerCreateAndEditComponent;
  let fixture: ComponentFixture<CustomerCreateAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerCreateAndEditComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CustomerCreateAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
