import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookRoomComponent } from './components/book-room/book-room.component';
import { ConfirmedPaymentComponent } from './components/confirmed-payment/confirmed-payment.component';
import { RoomPaymentGatewayComponent } from './components/room-payment-gateway/room-payment-gateway.component';
import { SearchHotelComponent } from './components/search-hotel/search-hotel.component';
import { ViewPropertyComponent } from './components/view-property/view-property.component';

const routes: Routes = [
  { path: '', component: SearchHotelComponent },
  { path: 'viewProperty/:pId', component: ViewPropertyComponent},
  { path: 'book-room/:pId/:rId', component: BookRoomComponent},
  { path: 'payment', component: RoomPaymentGatewayComponent},
  { path: 'confirmed-payment', component: ConfirmedPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
