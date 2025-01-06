import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedsignalComponent } from './linkedsignal.component';

describe('LinkedsignalComponent', () => {
  let component: LinkedsignalComponent;
  let fixture: ComponentFixture<LinkedsignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedsignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedsignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
