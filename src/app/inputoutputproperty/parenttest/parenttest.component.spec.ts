import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenttestComponent } from './parenttest.component';

describe('ParenttestComponent', () => {
  let component: ParenttestComponent;
  let fixture: ComponentFixture<ParenttestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParenttestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParenttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
