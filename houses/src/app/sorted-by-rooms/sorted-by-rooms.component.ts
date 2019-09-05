import {AfterViewChecked, ChangeDetectorRef, Component, Input} from '@angular/core';
import {House} from '../../model/house';
import {orderBy, isEmpty} from 'lodash';

@Component({
  selector: 'app-sorted-by-rooms',
  templateUrl: './sorted-by-rooms.component.html',
  styleUrls: ['./sorted-by-rooms.component.css']
})
export class SortedByRoomsComponent implements AfterViewChecked {

  @Input()
  allHouses = new Array<House>();

  housesByRooms = new Array<House>();

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewChecked() {
    this.sortHousesByRooms();
    this.cdr.detectChanges();
  }

  // a list of houses which have more then 5 rooms. Start with the lowest number of rooms.
  sortHousesByRooms() {
    this.housesByRooms = (!isEmpty(this.allHouses)) ? this.allHouses.filter(eachHouse => eachHouse.params.rooms > 5) : new Array<House>();
    this.housesByRooms.forEach(eachHouse => eachHouse.params.rooms = parseInt(String(eachHouse.params.rooms), 10));
    this.housesByRooms = orderBy(this.housesByRooms, ['params.rooms'], ['asc']);
  }

}
