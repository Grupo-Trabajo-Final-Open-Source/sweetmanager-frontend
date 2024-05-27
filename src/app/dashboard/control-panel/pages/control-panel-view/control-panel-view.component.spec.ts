import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelViewComponent } from './control-panel-view.component';

describe('ControlPanelViewComponent', () => {
  let component: ControlPanelViewComponent;
  let fixture: ComponentFixture<ControlPanelViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlPanelViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlPanelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
