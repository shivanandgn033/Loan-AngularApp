import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopilotClsComponent } from './copilot-cls.component';

describe('CopilotClsComponent', () => {
  let component: CopilotClsComponent;
  let fixture: ComponentFixture<CopilotClsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopilotClsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopilotClsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
