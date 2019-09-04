import {AfterViewInit, Component, Input} from '@angular/core';
import {House} from '../../model/house';
import {orderBy, isEmpty} from 'lodash';

@Component({
  selector: 'app-sorted-by-rooms',
  templateUrl: './sorted-by-rooms.component.html',
  styleUrls: ['./sorted-by-rooms.component.css']
})
export class SortedByRoomsComponent implements AfterViewInit {

  @Input()
  allHouses = new Array<House>();

  housesByRooms = new Array<House>();

  constructor() {
  }

  ngAfterViewInit() {
    this.sortHousesByRooms();
  }

  // a list of houses w hich have more then 5 rooms. Start w ith the low est number of rooms.
  sortHousesByRooms() {
    console.log('this.allHouses', this.allHouses);
    const roomsByHouses = (!isEmpty(this.allHouses)) ? this.allHouses.filter(eachHouse => eachHouse.params.rooms > 5) : new Array<House>();
    this.housesByRooms = orderBy(roomsByHouses, ['rooms'], ['asc']);
  }

}
