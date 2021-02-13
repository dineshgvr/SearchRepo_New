import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchHotelService } from 'src/app/services/search-hotel.service';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.scss']
})
export class BookRoomComponent implements OnInit {
  public checkInDate: string;
  public checkOutDate: string;
  public propertyInfo: any;
  public roomInfo: Observable<any>;
  public roomRate: any;
  public travellerInfoForm: FormGroup;
  public isShowpayment: boolean = false;
  public masterImage: string;
  public propertyId: string;

  constructor(private _router: Router,
    private _searchHotelService: SearchHotelService,
    private _activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder) {
    if (localStorage.getItem("checkIn-Info")) {
      let checkInInfo = JSON.parse(localStorage.getItem("checkIn-Info"));
      this.checkInDate = checkInInfo.checkInDate;
      this.checkOutDate = checkInInfo.checkOutDate;
    }

    this.travellerInfoForm = this._formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      emailAddress: new FormControl('', Validators.required),
      contactInfo: new FormControl('', Validators.required),
      specialRequest: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.propertyId = this._activatedRoute.snapshot.params['pId'];
    let roomId = this._activatedRoute.snapshot.params['rId'];
    this.getpropertyImages(this.propertyId);
    this.getPropertyInfo(this.propertyId);
    this.roomDetailsInfo(roomId);
  }

  paymentgateway() {
    // this._router.navigate(['/payment']);
    this.isShowpayment = true;
  }

  getpropertyImages(propertyId: string) {
    this._searchHotelService.getpropertyImages(propertyId).subscribe((response: any) => {
      let img = response.masterImage.split("/");
      debugger;
      if (img.length > 0) {
        this.masterImage = img[img.length - 1];
      }
    });
  }
  bookRoom() {

  }

  getPropertyInfo(propertyId: string) {
    this._searchHotelService.getpropertyInfo(propertyId).subscribe((response: any) => {
      this.propertyInfo = {
        propertyName: response.propertyName,
        address: response.address,
        state: response.state,
        country: response.country,
        roomRate: response.roomRate
      }
    });
  }

  roomDetailsInfo(roomId: string) {
    this._searchHotelService.getRoomInfoByRoomId(roomId).subscribe((response: any) => {
      this.roomRate = response.roomRate;
    });
  }
}
