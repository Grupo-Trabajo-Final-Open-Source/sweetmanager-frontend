import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSubscriptionComponent } from './card-subscription.component';

describe('CardSubscriptionComponent', () => {
  let component: CardSubscriptionComponent;
  let fixture: ComponentFixture<CardSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSubscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
