import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlStateChangeEventsComponent } from './control-state-change-events.component';

describe('ControlStateChangeEventsComponent', () => {
  let component: ControlStateChangeEventsComponent;
  let fixture: ComponentFixture<ControlStateChangeEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlStateChangeEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlStateChangeEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
