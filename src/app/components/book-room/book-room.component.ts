import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.scss']
})
export class BookRoomComponent implements OnInit {
  public checkInDate: string;
  public checkOutDate: string;
  constructor(private _router: Router) { 
    if (localStorage.getItem("checkIn-Info")) {
      let checkInInfo = JSON.parse(localStorage.getItem("checkIn-Info"));
      this.checkInDate = checkInInfo.checkInDate;
      this.checkOutDate = checkInInfo.checkOutDate;
    }
  }

  ngOnInit(): void {
  }

  paymentgateway() {

  }

  bookRoom() {
    
  }
}
