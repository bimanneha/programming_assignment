import {Component, Input, OnInit} from '@angular/core';
import {House} from '../../model/house';
import {orderBy} from 'lodash';

@Component({
  selector: 'app-sorted-by-street',
  templateUrl: './sorted-by-street.component.html',
  styleUrls: ['./sorted-by-street.component.css']
})

export class SortedByStreetComponent implements OnInit {

  @Input()
  allHouses: House[];

  housesByStreet: House[];

  constructor() {
  }

  ngOnInit() {
    this.sortHousesByStreet();
  }

  // a list of houses that you do not have all the data for. Sort them by the street-name.
  sortHousesByStreet() {
    this.housesByStreet = orderBy(this.allHouses, ['street'], ['asc']);
  }

}
