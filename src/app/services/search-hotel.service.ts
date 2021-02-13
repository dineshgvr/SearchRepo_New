import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchHotelService {

  constructor(private readonly _httpClient: HttpClient) { }

  getSearchHotelList(searchHotelParams: any): Observable<any> {
    return this._httpClient.post<any>('http://roomstoinn.com:9090/getProperyByRoomAvailablity', searchHotelParams);
  }

  getpropertyImages(propertyId: string): Observable<any> {
    return this._httpClient.get('http://roomstoinn.com:9090/getPropertyImage/'+ propertyId);
  }

  getpropertyInfo(propertyId: string): Observable<any> {
    return this._httpClient.get('http://roomstoinn.com:9090/getPropertyDetailsById/'+ propertyId);
  }

  getPropertyAmenitiesByPropertyId(propertyId: string) {
    return this._httpClient.get('http://roomstoinn.com:9090/getPropertyAmenitesById/' + propertyId);
  }

  getPropertyRooms(propertyId: string): Observable<any> {
    return this._httpClient.get('http://roomstoinn.com:9090/searchProperty/' + propertyId);
  }

  getRoomAmenititesByRoomId(roomId: string): Observable<any> {
    return this._httpClient.get('http://roomstoinn.com:9090/getRoomAmenitesById/' + roomId);
  }
}
