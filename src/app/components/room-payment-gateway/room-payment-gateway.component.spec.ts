import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPaymentGatewayComponent } from './room-payment-gateway.component';

describe('RoomPaymentGatewayComponent', () => {
  let component: RoomPaymentGatewayComponent;
  let fixture: ComponentFixture<RoomPaymentGatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomPaymentGatewayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomPaymentGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
