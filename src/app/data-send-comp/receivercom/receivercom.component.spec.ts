import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivercomComponent } from './receivercom.component';

describe('ReceivercomComponent', () => {
  let component: ReceivercomComponent;
  let fixture: ComponentFixture<ReceivercomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceivercomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivercomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
