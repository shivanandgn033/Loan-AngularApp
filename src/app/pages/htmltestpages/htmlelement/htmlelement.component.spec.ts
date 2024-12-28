import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlelementComponent } from './htmlelement.component';

describe('HtmlelementComponent', () => {
  let component: HtmlelementComponent;
  let fixture: ComponentFixture<HtmlelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlelementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
