import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomChartComponent } from './room-chart.component';

describe('RoomChartComponent', () => {
  let component: RoomChartComponent;
  let fixture: ComponentFixture<RoomChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
