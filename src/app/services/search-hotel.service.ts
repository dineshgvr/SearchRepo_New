import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchHotelService {

  constructor(private readonly _httpClient: HttpClient) { }

  getSearchHotelList(searchHotelParams: any): Observable<any> {
    return this._httpClient.post<any>('http://roomstoinn.com:9090/getProperyByRoomAvailablity', searchHotelParams);
  }

  getpropertyImages(propertyId: string): Observable<any> {
    return this._httpClient.get('http://roomstoinn.com:9090/getPropertyImage/propertyId');
  }
}
