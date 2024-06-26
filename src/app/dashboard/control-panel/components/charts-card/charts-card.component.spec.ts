import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsCardComponent } from './charts-card.component';

describe('ChartsCardComponent', () => {
  let component: ChartsCardComponent;
  let fixture: ComponentFixture<ChartsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
