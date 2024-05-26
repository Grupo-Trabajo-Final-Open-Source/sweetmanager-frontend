import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCreateAndEditComponent } from './room-create-and-edit.component';

describe('RoomCreateAndEditComponent', () => {
  let component: RoomCreateAndEditComponent;
  let fixture: ComponentFixture<RoomCreateAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomCreateAndEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomCreateAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
