import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchHotelService } from 'src/app/services/search-hotel.service';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.scss']
})
export class ViewPropertyComponent implements OnInit {
  public slides = [
    // {img: "assets/images/exteranl-images/background.png"},
    // {img: "assets/images/exteranl-images/background.png"},
    // {img: "assets/images/exteranl-images/background.png"}
  ];
  public smallSlides = [];
  public slideConfig = { "slidesToShow": 1, "slidesToScroll": 1, "centerMode": false };
  public roomAmenities: Observable<any>;
  public propertyInfo: any = {
    propertyName: '',
    address: '',
    state: '',
    country: '',
    roomRate: ''
  };
  public roomsList: any = [];
  public roomsImagesList: any = [];
  public propertyId: string = '';
  constructor(private searchHotelService: SearchHotelService,
    private _ActivatedRouter: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.propertyId = this._ActivatedRouter.snapshot.params['pId'];
    this.getPropertyInfo(this.propertyId);
    this.getpropertyImages(this.propertyId);
    this.getPropertyAmentiesByPropertyId(this.propertyId);
    this.getSearchPropertyRooms(this.propertyId);
  }

  getPropertyInfo(propertyId: string) {
    this.searchHotelService.getpropertyInfo(propertyId).subscribe((response: any) => {
      console.log('axxx', response);
      this.propertyInfo = {
        propertyName: response.propertyName,
        address: response.address,
        state: response.state,
        country: response.country,
        roomRate: response.roomRate
      }
    });
  }
  getpropertyImages(propertyId: string) {
    this.searchHotelService.getpropertyImages(propertyId).subscribe((response: any) => {
      [response].map((item: any) => {
        if (item.masterImage || item.image2 || item.image3 || item.image4 || item.image5 || item.image6 || item.image7 || item.image8) {
          let masterImage = item.masterImage.split("/");
          masterImage = masterImage[masterImage.length - 1];
          this.slides.push({ img: `http://roomstoinn.com:9090/downloadFile/${propertyId}/${masterImage}` })
          this.smallSlides.push({ path: `http://roomstoinn.com:9090/downloadFile/${propertyId}/${masterImage}` })
        
          this.roomsImagesList.push(masterImage);

          let image2 = item.image2.split("/");
          if (image2.length > 0) {
            image2 = image2[image2.length - 1];
            this.slides.push({ img: `http://roomstoinn.com:9090/downloadFile/${propertyId}/${image2}` })
            this.smallSlides.push({ path: `http://roomstoinn.com:9090/downloadFile/${propertyId}/${image2}` })
            this.roomsImagesList.push(image2);
          }

          let image3 = item.image3.split("/");
          if (image3.length > 0) {
            image3 = image3[image3.length - 1];
            this.slides.push({ img: `http://roomstoinn.com:9090/downloadFile/${propertyId}/${image3}` });
            this.smallSlides.push({ path: `http://roomstoinn.com:9090/downloadFile/${propertyId}/${image3}` });
            this.roomsImagesList.push(image3);

          }

          let image4 = item.image4.split("/");
          if (image4.length > 0) {
            image4 = image4[image4.length - 1];
            this.slides.push({ img: `http://roomstoinn.com:9090/downloadFile/${propertyId}/${image4}` });
            this.smallSlides.push({ path: `http://roomstoinn.com:9090/downloadFile/${propertyId}/${image4}` });
            this.roomsImagesList.push(image4);
          }

          let image5 = item.image5.split("/");
          if (image5.length > 0) {
            image5 = image5[image5.length - 1];
            this.slides.push({ img: `http://roomstoinn.com:9090/downloadFile/${propertyId}/${image5}` })
            this.smallSlides.push({ path: `http://roomstoinn.com:9090/downloadFile/${propertyId}/${image5}` })
            this.roomsImagesList.push(image5);

          }

          let image6 = item.image6.split("/");
          if (image6.length > 0) {
            image6 = image6[image6.length - 1];
            this.slides.push({ img: `http://roomstoinn.com:9090/downloadFile/${propertyId}/${image6}` });
            this.smallSlides.push({ path: `http://roomstoinn.com:9090/downloadFile/${propertyId}/${image6}` });
            this.roomsImagesList.push(image6);
          }
        }
      })
    });
  }

  getPropertyAmentiesByPropertyId(propertyId: string) {
    this.searchHotelService.getPropertyAmenitiesByPropertyId(propertyId).subscribe((response: any) => {
      console.log(response);
    });
  }

  public getRoomAmenititesByRoomId(roomId: string) {
    this.searchHotelService.getRoomAmenititesByRoomId(roomId).subscribe((response: any) => console.log(response));
  }

  getSearchPropertyRooms(propertyId: string) {
    this.searchHotelService.getPropertyRooms(propertyId).subscribe((response: any) => {
      this.roomsList = response.List1;
    });
  }

  bookRoom(roomId: string) {
    this._router.navigate(['/book-room', this.propertyId, roomId]);
  }

}
