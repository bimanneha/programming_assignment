import {Component, Input, OnInit} from '@angular/core';
import {House} from '../../model/house';

@Component({
  selector: 'app-all-houses',
  templateUrl: './all-houses.component.html',
  styleUrls: ['./all-houses.component.css']
})
export class AllHousesComponent implements OnInit {

  @Input()
  allHouses: House[];

  constructor() {
  }

  ngOnInit() {

  }
}
