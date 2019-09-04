import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SortedHousesComponent} from './sorted-houses/sorted-houses.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path:  '', redirectTo:  '', pathMatch:  'full' },
  {path: 'sorted', component: SortedHousesComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
