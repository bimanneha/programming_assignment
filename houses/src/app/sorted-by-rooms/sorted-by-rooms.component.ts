import {Component, Input, OnInit} from '@angular/core';
import {House} from '../../model/house';
import {orderBy} from 'lodash';

@Component({
  selector: 'app-sorted-by-rooms',
  templateUrl: './sorted-by-rooms.component.html',
  styleUrls: ['./sorted-by-rooms.component.css']
})
export class SortedByRoomsComponent implements OnInit {

  @Input()
  allHouses: House[];

  housesByRooms: House[];

  constructor() {
  }

  ngOnInit() {
    this.sortHousesByRooms();
  }

  // a list of houses w hich have more then 5 rooms. Start w ith the low est number of rooms.
  sortHousesByRooms() {
    const roomsByHouses = this.allHouses.filter(eachHouse => eachHouse.params.rooms > 5);
    this.housesByRooms = orderBy(roomsByHouses, ['rooms'], ['asc']);
  }

}
