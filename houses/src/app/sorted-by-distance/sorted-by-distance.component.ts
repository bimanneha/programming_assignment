import {AfterViewChecked, ChangeDetectorRef, Component, Input} from '@angular/core';
import {House} from '../../model/house';
import {orderBy} from 'lodash';

@Component({
  selector: 'app-sorted-by-distance',
  templateUrl: './sorted-by-distance.component.html',
  styleUrls: ['./sorted-by-distance.component.css']
})

export class SortedByDistanceComponent implements AfterViewChecked {

  @Input()
  allHouses = new Array<House>();

  housesSortedByDistance = new Array<House>();

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewChecked(): void {
    this.sortByLowestDistance();
    this.cdr.detectChanges();
  }

  // sorting all the houses based on distance in ascending order
  sortByLowestDistance(): void {
    this.housesSortedByDistance = orderBy(this.allHouses, ['distance'], ['asc']);
  }

}
