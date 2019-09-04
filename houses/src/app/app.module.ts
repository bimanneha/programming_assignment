import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HousesComponent} from './houses/houses.component';
import {AllHousesComponent} from './all-houses/all-houses.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NavigationComponent} from './navigation/navigation.component';
import {SortedByDistanceComponent} from './sorted-by-distance/sorted-by-distance.component';
import {SortedByRoomsComponent} from './sorted-by-rooms/sorted-by-rooms.component';
import {SortedByStreetComponent} from './sorted-by-street/sorted-by-street.component';
import {MoveInHouseComponent} from './move-in-house/move-in-house.component';
import { EachHouseComponent } from './each-house/each-house.component';

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    AllHousesComponent,
    SortedByDistanceComponent,
    SortedByRoomsComponent,
    SortedByStreetComponent,
    MoveInHouseComponent,
    PageNotFoundComponent,
    EachHouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
