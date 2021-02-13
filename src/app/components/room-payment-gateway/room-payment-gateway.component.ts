import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-payment-gateway',
  templateUrl: './room-payment-gateway.component.html',
  styleUrls: ['./room-payment-gateway.component.scss']
})
export class RoomPaymentGatewayComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  makePayment() {
    this._router.navigate(['/confirmed-payment']);
  }

}
