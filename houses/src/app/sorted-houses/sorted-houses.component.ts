import { Component, OnInit } from '@angular/core';
import {BuildingsDataService} from '../../service/buildings-data.service';

@Component({
  selector: 'app-sorted-houses',
  templateUrl: './sorted-houses.component.html',
  styleUrls: ['./sorted-houses.component.css']
})
export class SortedHousesComponent implements OnInit {

  constructor(private buildingsDataService: BuildingsDataService) { }

  ngOnInit() {
    this.buildingsDataService.getBuildingsData()
      .subscribe(buildingsDataFromAPI => {
        console.log('buildingsDataFromAPI', buildingsDataFromAPI);
      });
  }

}
