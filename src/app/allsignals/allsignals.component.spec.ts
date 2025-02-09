import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsignalsComponent } from './allsignals.component';

describe('AllsignalsComponent', () => {
  let component: AllsignalsComponent;
  let fixture: ComponentFixture<AllsignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllsignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllsignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
