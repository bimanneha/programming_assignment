import {Component, Input, OnInit} from '@angular/core';
import {House} from '../../model/house';
import {isEmpty} from 'lodash';

@Component({
  selector: 'app-move-in-house',
  templateUrl: './move-in-house.component.html',
  styleUrls: ['./move-in-house.component.css']
})
export class MoveInHouseComponent implements OnInit {

  @Input()
  allHouses: House[];

  moveInHouse: House;
  selectedMoveInHouse = false;

  constructor() { }

  ngOnInit() {
    this.findMoveInHouse();
  }

  // move into the house that is closest to your sisters home, but only if the house has at least 10 rooms and does not cost more than
  // 5.000.000 €. If you don't know the number of rooms, or the value of the house, you do not w ant to move into the house.
  findMoveInHouse() {
    const housesWithRoomsAndValues = this.allHouses.filter(eachHouse => eachHouse.params.rooms && eachHouse.params.value);
    const selectedHouse = housesWithRoomsAndValues.filter(eachHouse => eachHouse.params.rooms >= 10 && eachHouse.params.value <= 5000000);
    this.moveInHouse = (isEmpty(selectedHouse)) ? selectedHouse[0] : new House();

    this.selectedMoveInHouse = (!isEmpty(this.moveInHouse));
  }
}
