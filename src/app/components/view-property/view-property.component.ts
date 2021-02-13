import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchHotelService } from 'src/app/services/search-hotel.service';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.scss']
})
export class ViewPropertyComponent implements OnInit {
  slides = [
    // {img: "assets/images/exteranl-images/background.png"},
    // {img: "assets/images/exteranl-images/background.png"},
    // {img: "assets/images/exteranl-images/background.png"}
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "centerMode": false };
  public propertyInfo: any;
  public roomsList: any = [];
  public roomsImagesList: any = [];
  constructor(private searchHotelService: SearchHotelService,
    private _ActivatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const propertyId = this._ActivatedRouter.snapshot.params['pId'];
    this.getPropertyInfo(propertyId);
    this.getpropertyImages(propertyId);
    this.getPropertyAmentiesByPropertyId(propertyId);
    this.getSearchPropertyRooms(propertyId);
  }

  getPropertyInfo(propertyId: string) {
    this.searchHotelService.getpropertyInfo(propertyId).subscribe((response: any) => {
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
          this.slides.push({img: `http://roomstoinn.com:9090/downloadFile/PR-CO-3/${masterImage}`})
          this.roomsImagesList.push(masterImage);

          let image2 = item.image2.split("/");
          if (image2.length > 0) {
            image2 = image2[image2.length - 1];
            this.slides.push({img: `http://roomstoinn.com:9090/downloadFile/PR-CO-3/${image2}`})
            this.roomsImagesList.push(image2);
          }
         
          let image3 = item.image3.split("/");
          if (image3.length > 0) {
            image3 = image3[image3.length - 1];
          this.slides.push({img: `http://roomstoinn.com:9090/downloadFile/PR-CO-3/${image3}`});
          this.roomsImagesList.push(image3);

          }

          let image4 = item.image4.split("/");
          if (image4.length > 0) {
            image4 = image4[image4.length - 1];
            this.slides.push({img: `http://roomstoinn.com:9090/downloadFile/PR-CO-3/${image4}`});
            this.roomsImagesList.push(image4);
          }

          let image5 = item.image5.split("/");
          if (image5.length > 0) {
            image5 = image5[image5.length - 1];
            this.slides.push({img: `http://roomstoinn.com:9090/downloadFile/PR-CO-3/${image5}`})
            this.roomsImagesList.push(image5);

          }

          let image6 = item.image6.split("/");
          if (image6.length > 0) {
            image6 = image6[image6.length - 1];
          this.slides.push({img: `http://roomstoinn.com:9090/downloadFile/PR-CO-3/${image6}`});
          this.roomsImagesList.push(image6);
          }
        }
        console.log(this.slides);
      })
    });
  }

  getPropertyAmentiesByPropertyId(propertyId: string) {
    this.searchHotelService.getPropertyAmenitiesByPropertyId(propertyId).subscribe((response: any) => {

    });
  }

  getSearchPropertyRooms(propertyId: string) {
    this.searchHotelService.getPropertyRooms(propertyId).subscribe((response: any) => {
      this.roomsList = response.List1;
    });
  }

}
