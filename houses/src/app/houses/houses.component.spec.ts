import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesComponent } from './houses.component';
import {HeaderComponent} from '../header/header.component';
import {NavigationComponent} from '../navigation/navigation.component';
import {FooterComponent} from '../footer/footer.component';
import {AllHousesComponent} from '../all-houses/all-houses.component';
import {SortedByDistanceComponent} from '../sorted-by-distance/sorted-by-distance.component';
import {SortedByStreetComponent} from '../sorted-by-street/sorted-by-street.component';
import {SortedByRoomsComponent} from '../sorted-by-rooms/sorted-by-rooms.component';
import {MoveInHouseComponent} from '../move-in-house/move-in-house.component';

describe('HousesComponent', () => {
  let component: HousesComponent;
  let fixture: ComponentFixture<HousesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesComponent, HeaderComponent, NavigationComponent, FooterComponent,
      AllHousesComponent, SortedByDistanceComponent, SortedByStreetComponent, SortedByRoomsComponent, MoveInHouseComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
