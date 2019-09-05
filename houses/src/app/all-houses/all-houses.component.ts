import {AfterViewChecked, ChangeDetectorRef, Component, Input} from '@angular/core';
import {House} from '../../model/house';

@Component({
  selector: 'app-all-houses',
  templateUrl: './all-houses.component.html',
  styleUrls: ['./all-houses.component.css']
})
export class AllHousesComponent implements AfterViewChecked {

  @Input()
  allHouses = new Array<House>();

  houses = new Array<House>();

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewChecked(): void {
    this.houses = this.allHouses;
    this.cdr.detectChanges();
  }
}
