import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchHotelComponent } from './components/search-hotel/search-hotel.component';
import { ViewPropertyComponent } from './components/view-property/view-property.component';

const routes: Routes = [
  { path: '', component: SearchHotelComponent },
  { path: 'viewProperty', component: ViewPropertyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
