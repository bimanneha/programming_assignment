import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AllHousesComponent} from './all-houses/all-houses.component';
import {SortedByDistanceComponent} from './sorted-by-distance/sorted-by-distance.component';
import {SortedByRoomsComponent} from './sorted-by-rooms/sorted-by-rooms.component';
import {SortedByStreetComponent} from './sorted-by-street/sorted-by-street.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HousesComponent} from './houses/houses.component';
import {MoveInHouseComponent} from './move-in-house/move-in-house.component';

const routes: Routes = [
  {path: '', redirectTo: 'houses', pathMatch: 'full' },
  {
    path: 'houses', component: HousesComponent,
    children: [
      {path: '', redirectTo: 'all', pathMatch: 'full' },
      {path: 'all', component: AllHousesComponent},
      {path: 'distance', component: SortedByDistanceComponent},
      {path: 'rooms', component: SortedByRoomsComponent},
      {path: 'street', component: SortedByStreetComponent},
      {path: 'moveIn', component: MoveInHouseComponent}
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
