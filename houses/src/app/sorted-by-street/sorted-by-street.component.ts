import {AfterViewChecked, ChangeDetectorRef, Component, Input} from '@angular/core';
import {House} from '../../model/house';
import {orderBy} from 'lodash';

@Component({
  selector: 'app-sorted-by-street',
  templateUrl: './sorted-by-street.component.html',
  styleUrls: ['./sorted-by-street.component.css']
})

export class SortedByStreetComponent implements AfterViewChecked {

  @Input()
  allHouses = new Array<House>();

  housesByStreet = new Array<House>();

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewChecked() {
    this.sortHousesByStreet();
    this.cdr.detectChanges();
  }

  // a list of houses that you do not have all the data for. Sort them by the street-name.
  sortHousesByStreet() {
    const filteredHouses = this.allHouses.filter(eachHouse => (!eachHouse.params.rooms || !eachHouse.params.value));
    this.housesByStreet = orderBy(filteredHouses, ['street'], ['asc']);
  }

}
