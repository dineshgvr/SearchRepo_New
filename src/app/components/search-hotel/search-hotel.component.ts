import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { from } from 'rxjs';
import { of } from 'rxjs';
import { Observable, zip } from 'rxjs';
import { catchError, concatMap, map, mergeMap, pluck, scan, switchMap } from 'rxjs/operators';
import { SearchHotelService } from 'src/app/services/search-hotel.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.scss']
})
export class SearchHotelComponent implements OnInit {
  readonly checkInDate: any = moment(new Date()).format('YYYY-MM-DD');
  readonly checkOutDate: any = moment(new Date(new Date().setMonth(4))).format('YYYY-MM-DD');
  readonly roomsType: any[] = environment.roomsType;
  public searchHotelList: any[] = []
  public searchForm: FormGroup;

  constructor(private _formbuilder: FormBuilder,
    private _searchHotelService: SearchHotelService,
    private _router: Router) {
    this.searchForm = this._formbuilder.group({
      checkInDate: new FormControl(new Date(this.checkInDate), [Validators.required]),
      checkOutDate: new FormControl(new Date(this.checkOutDate), [Validators.required]),
      typeOfTenant: new FormControl('undefined', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  onSearch() {
    if (this.searchForm.invalid) {
      return;
    }
    const searchFormValues: { checkInDate: string, checkOutDate: string, typeOfTenant: string} = {
      checkInDate: this.convertDateToString(this.searchForm.value.checkInDate),
      checkOutDate: this.convertDateToString(this.searchForm.value.checkOutDate),
      typeOfTenant: this.searchForm.value.typeOfTenant
    }
    this._searchHotelService.getSearchHotelList(searchFormValues).subscribe((response: any) => {
      this.searchHotelList = response;
    });
    //   this._searchHotelService.getSearchHotelList(this.searchForm.value)
    //     .pipe(map((result: any) => {
    //       return result.map((inner: any) => {
    //         return inner.propertyId;
    //       })
    //     }), concatMap((inner: any) => { 
    //       return this._searchHotelService.getpropertyImages(inner);
    // }, catchError((error: any) => console.log(error)))
    //   debugger
    //   this._searchHotelService.getpropertyImages(hotel.propertyId).subscribe((response: any) => console.log('inner Response', response));
    // })).subscribe();

    // let urls = this._searchHotelService.getSearchHotelList(this.searchForm.value).pipe(pluck('propertyId'));
    // from(urls).subscribe((response: any) => console.log(response))
    // this._searchHotelService.getSearchHotelList(this.searchForm.value).pipe
  }

  onGetPropertyImages(propertyId: string) {
    return of(this._searchHotelService.getpropertyImages(propertyId)).pipe((catchError((error: any) => of('throw error occured'))));
  }

  onNavigateToViewProperty(propertyId: string) {
    if (!propertyId) return;
    this._router.navigate(['/viewProperty', propertyId]);
  }

  convertDateToString(Date: any): string {
      return moment(Date).format('YYYY-MM-DD');
  }
}

