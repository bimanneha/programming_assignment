import {Component, OnInit} from '@angular/core';
import {BuildingsDataService} from '../../service/buildings-data.service';
import {cloneDeep, isEmpty, orderBy} from 'lodash';
import {House} from '../../model/house';
import {DistanceCalc} from '../../utility/distance-calc';
import {StreetEnum} from '../../enums/street.enum';

@Component({
  selector: 'app-sorted-houses',
  templateUrl: './sorted-houses.component.html',
  styleUrls: ['./sorted-houses.component.css']
})
export class SortedHousesComponent implements OnInit {

  houseDetails: House[];
  housesByRooms: House[];
  housesByStreet: House[];

  sistersHouse: House;
  moveInHouse: House;
  selectedMoveInHouse = false;

  constructor(private buildingsDataService: BuildingsDataService, private distanceCalc: DistanceCalc) {
  }

  ngOnInit() {
    this.buildingsDataService.getBuildingsData()
      .subscribe(buildingsDataFromAPI => {

        this.extractHouseData(buildingsDataFromAPI);
        this.extractSistersHouse(this.houseDetails);
        this.calculateDistance(this.houseDetails);

        this.sortByLowestDistance(this.houseDetails);
        this.sortHousesByRooms(this.houseDetails);
        this.sortHousesByStreet(this.houseDetails);
        this.findMoveInHouse(this.houseDetails);

        console.log('this.houseDetails', this.houseDetails);
      });
  }

  extractHouseData(buildingsDataFromAPI) {
    this.houseDetails = (buildingsDataFromAPI.hasOwnProperty('houses')) ? cloneDeep(buildingsDataFromAPI.houses) :
      new Array<House>();
  }

  extractSistersHouse(allHouses: House[]) {
    const filteredHouse = allHouses.filter(eachHouse => eachHouse.street === StreetEnum.SISTER);
    this.sistersHouse = (isEmpty(filteredHouse)) ? filteredHouse[0] : new House();
  }

  calculateDistance(allHouses: House[]) {
    allHouses.forEach(eachHouse => {
      eachHouse.distance = this.distanceCalc.calculateDistance(eachHouse, this.sistersHouse);
    });
  }

  sortByLowestDistance(allHouses: House[]) {
    this.houseDetails = orderBy(allHouses, ['distance'], ['asc']);
  }

  sortHousesByRooms(allHouses: House[]) {
    const roomsByHouses = allHouses.filter(eachHouse => eachHouse.params.rooms > 5);
    this.housesByRooms = orderBy(roomsByHouses, ['rooms'], ['asc']);
  }

  sortHousesByStreet(allHouses: House[]) {
    this.housesByStreet = orderBy(allHouses, ['street'], ['asc']);
  }

  findMoveInHouse(allHouses: House[]) {
    const housesWithRoomsAndValues = allHouses.filter(eachHouse => eachHouse.params.rooms && eachHouse.params.value);
    const selectedHouse = housesWithRoomsAndValues.filter(eachHouse => eachHouse.params.rooms >= 10 && eachHouse.params.value <= 5000000);
    this.moveInHouse = (isEmpty(selectedHouse)) ? selectedHouse[0] : new House();

    this.selectedMoveInHouse = (!isEmpty(this.moveInHouse));
  }

}
