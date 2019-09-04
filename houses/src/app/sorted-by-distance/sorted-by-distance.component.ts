import {AfterViewInit, Component, Input} from '@angular/core';
import {House} from '../../model/house';
import {orderBy} from 'lodash';

@Component({
  selector: 'app-sorted-by-distance',
  templateUrl: './sorted-by-distance.component.html',
  styleUrls: ['./sorted-by-distance.component.css']
})

export class SortedByDistanceComponent implements AfterViewInit {

  @Input()
  allHouses = new Array<House>();

  housesSortedByDistance = new Array<House>();

  constructor() { }

  ngAfterViewInit(): void {
    console.log('this.allHouses on after init', this.allHouses);
    this.sortByLowestDistance();
  }

  // sorting all the houses based on distance in ascending order
  sortByLowestDistance(): void {
    console.log('this.allHouses', this.allHouses);
    this.housesSortedByDistance = orderBy(this.allHouses, ['distance'], ['asc']);
    console.log('this.housesSortedByDistance', this.housesSortedByDistance);
  }

}
