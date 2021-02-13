import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookRoomComponent } from './components/book-room/book-room.component';
import { SearchHotelComponent } from './components/search-hotel/search-hotel.component';
import { ViewPropertyComponent } from './components/view-property/view-property.component';

const routes: Routes = [
  { path: '', component: SearchHotelComponent },
  { path: 'viewProperty/:pId', component: ViewPropertyComponent},
  { path: 'book-room/:pId', component: BookRoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
