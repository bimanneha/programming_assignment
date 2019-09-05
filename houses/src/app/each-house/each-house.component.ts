import {AfterViewChecked, ChangeDetectorRef, Component, Input} from '@angular/core';
import {House} from '../../model/house';
import {StreetEnum} from '../../enums/street.enum';

@Component({
  selector: 'app-each-house',
  templateUrl: './each-house.component.html',
  styleUrls: ['./each-house.component.css']
})
export class EachHouseComponent implements AfterViewChecked {

  @Input()
  allHouses = new Array<House>();

  houseData = new Array<House>();

  referenceStreet = StreetEnum.SISTER;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewChecked() {
    this.houseData = this.allHouses;
    this.cdr.detectChanges();
  }
}
