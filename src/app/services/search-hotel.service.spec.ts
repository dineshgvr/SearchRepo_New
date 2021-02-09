import { TestBed } from '@angular/core/testing';

import { SearchHotelService } from './search-hotel.service';

describe('SearchHotelService', () => {
  let service: SearchHotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchHotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
