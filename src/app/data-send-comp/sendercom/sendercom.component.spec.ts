import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendercomComponent } from './sendercom.component';

describe('SendercomComponent', () => {
  let component: SendercomComponent;
  let fixture: ComponentFixture<SendercomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendercomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendercomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
