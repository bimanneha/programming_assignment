import {AfterViewInit, Component, Input} from '@angular/core';
import {House} from '../../model/house';

@Component({
  selector: 'app-all-houses',
  templateUrl: './all-houses.component.html',
  styleUrls: ['./all-houses.component.css']
})
export class AllHousesComponent implements AfterViewInit {

  @Input()
  allHouses = new Array<House>();

  houses = new Array<House>();

  constructor() {
  }

  ngAfterViewInit(): void {
    console.log('data : ', this.allHouses);
    this.houses = this.allHouses;
  }
}
