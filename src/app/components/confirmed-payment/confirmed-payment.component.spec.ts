import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedPaymentComponent } from './confirmed-payment.component';

describe('ConfirmedPaymentComponent', () => {
  let component: ConfirmedPaymentComponent;
  let fixture: ComponentFixture<ConfirmedPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
