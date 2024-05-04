import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyCreateAndEditComponent } from './supply-create-and-edit.component';

describe('SupplyCreateAndEditComponent', () => {
  let component: SupplyCreateAndEditComponent;
  let fixture: ComponentFixture<SupplyCreateAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplyCreateAndEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplyCreateAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
