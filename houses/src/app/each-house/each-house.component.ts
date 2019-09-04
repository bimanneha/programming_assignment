import {AfterViewInit, Component, Input} from '@angular/core';
import {House} from '../../model/house';

@Component({
  selector: 'app-each-house',
  templateUrl: './each-house.component.html',
  styleUrls: ['./each-house.component.css']
})
export class EachHouseComponent implements AfterViewInit {

  @Input()
  allHouses = new Array<House>();

  houseData = new Array<House>();

  constructor() {
  }

  ngAfterViewInit() {
    this.houseData = this.allHouses;
  }
}
