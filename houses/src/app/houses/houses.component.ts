import {Component, OnInit} from '@angular/core';
import {BuildingsDataService} from '../../service/buildings-data.service';
import {cloneDeep, isEmpty} from 'lodash';
import {DistanceCalc} from '../../utility/distance-calc';
import {House} from '../../model/house';
import {CoOrdinate} from '../../model/co-ordinate';
import {Params} from '../../model/params';
import {StreetEnum} from '../../enums/street.enum';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  allHouses = new Array<House>();
  sistersHouse = new House();

  isAllHouses = true;
  isByDistance = false;
  isByRoom = false;
  isByStreet = false;
  isMoveIn = false;

  constructor(private buildingsDataService: BuildingsDataService, private distanceCalc: DistanceCalc) {
  }

  ngOnInit() {
    // API call to retrieve all data of the houses
    this.buildingsDataService.getBuildingsData()
      .subscribe(buildingsDataFromAPI => {

        this.extractHouseData(buildingsDataFromAPI);
        this.sanitizeData();
        this.extractSistersHouse();
        this.calculateDistance();

        console.log('this.allHouses', this.allHouses);
      });
  }

  // extracting the houses array from the JSON Object received from API
  extractHouseData(buildingsDataFromAPI): void {
    this.allHouses = (buildingsDataFromAPI.hasOwnProperty('houses')) ? cloneDeep(buildingsDataFromAPI.houses) :
      new Array<House>();
  }

  // sanitize data received from API
  sanitizeData(): void {
    this.allHouses.forEach(eachHouse => {
      if (!eachHouse.coords) {
        eachHouse.coords = new CoOrdinate();
      }

      if (!eachHouse.params) {
        eachHouse.params = new Params();
      }
    });
  }

  // a list of all the houses sorted according to their distance to your sisters home in Eberswalder Straße 55. Start w ith the house
  // with the lowest distance.
  extractSistersHouse(): void {
    const filteredHouse = this.allHouses.filter(eachHouse => eachHouse.street === StreetEnum.SISTER);
    this.sistersHouse = (isEmpty(filteredHouse)) ? filteredHouse[0] : new House();
  }

  // calculate distance of each House from the sister's house using their longitude and latitude values
  calculateDistance(): void {
    this.allHouses.forEach(eachHouse => {
      // skipping sister's house as the distance would be 0.0 naturally
      eachHouse.distance = (eachHouse.street !== StreetEnum.SISTER) ?
        this.distanceCalc.calculateDistance(eachHouse, this.sistersHouse) : 0.0;
    });
  }

  clickedNewTab(tabName): void {
    console.log('tabName', tabName);
    switch (tabName) {
      case 'all':
        this.isAllHouses = true;
        this.isByDistance = false;
        this.isByRoom = false;
        this.isByStreet = false;
        this.isMoveIn = false;
        break;
      case 'distance':
        this.isAllHouses = false;
        this.isByDistance = true;
        this.isByRoom = false;
        this.isByStreet = false;
        this.isMoveIn = false;
        break;
      case 'rooms':
        this.isAllHouses = false;
        this.isByDistance = false;
        this.isByRoom = true;
        this.isByStreet = false;
        this.isMoveIn = false;
        break;
      case 'street':
        this.isAllHouses = false;
        this.isByDistance = false;
        this.isByRoom = false;
        this.isByStreet = true;
        this.isMoveIn = false;
        break;
      case 'moveIn':
        this.isAllHouses = false;
        this.isByDistance = false;
        this.isByRoom = false;
        this.isByStreet = false;
        this.isMoveIn = true;
        break;
      default:
        this.isAllHouses = true;
        this.isByDistance = false;
        this.isByRoom = false;
        this.isByStreet = false;
        this.isMoveIn = false;
        break;
    }
  }
}
