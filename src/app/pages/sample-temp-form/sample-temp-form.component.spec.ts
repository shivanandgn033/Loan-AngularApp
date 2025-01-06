import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTempFormComponent } from './sample-temp-form.component';

describe('SampleTempFormComponent', () => {
  let component: SampleTempFormComponent;
  let fixture: ComponentFixture<SampleTempFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleTempFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleTempFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
