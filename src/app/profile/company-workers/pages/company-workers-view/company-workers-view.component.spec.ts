import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyWorkersViewComponent } from './company-workers-view.component';

describe('CompanyWorkersViewComponent', () => {
  let component: CompanyWorkersViewComponent;
  let fixture: ComponentFixture<CompanyWorkersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyWorkersViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyWorkersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
