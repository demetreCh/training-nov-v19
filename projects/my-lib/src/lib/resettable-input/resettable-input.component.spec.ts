import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResettableInputComponent } from './resettable-input.component';

describe('ResettableInputComponent', () => {
  let component: ResettableInputComponent;
  let fixture: ComponentFixture<ResettableInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResettableInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResettableInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
