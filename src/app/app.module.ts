import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchHotelComponent } from './components/search-hotel/search-hotel.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ViewPropertyComponent } from './components/view-property/view-property.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { BookRoomComponent } from './components/book-room/book-room.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchHotelComponent,
    FooterComponent,
    ViewPropertyComponent,
    BookRoomComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    SlickCarouselModule,
    // BsDropdownModule,
    IvyCarouselModule
  ],
  providers: [
    { provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }
  ],
  exports: [SlickCarouselModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
