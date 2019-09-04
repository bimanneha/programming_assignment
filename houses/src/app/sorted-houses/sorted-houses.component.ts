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
    // API call to retrieve all data of the houses
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

  // extracting the houses array from the JSON data received from API
  extractHouseData(buildingsDataFromAPI) {
    this.houseDetails = (buildingsDataFromAPI.hasOwnProperty('houses')) ? cloneDeep(buildingsDataFromAPI.houses) :
      new Array<House>();
  }

  // a list of all the houses sorted according to their distance to your sisters home in Eberswalder Straße 55. Start w ith the house
  // with the low est distance.
  extractSistersHouse(allHouses: House[]) {
    const filteredHouse = allHouses.filter(eachHouse => eachHouse.street === StreetEnum.SISTER);
    this.sistersHouse = (isEmpty(filteredHouse)) ? filteredHouse[0] : new House();
  }

  // calculate distance of each House from the sister's house using their longitude and latitude values
  calculateDistance(allHouses: House[]) {
    allHouses.forEach(eachHouse => {
      // skipping sister's house as the distance would be 0.0 naturally
      eachHouse.distance = (eachHouse.street !== StreetEnum.SISTER) ?
        this.distanceCalc.calculateDistance(eachHouse, this.sistersHouse) : 0.0;
    });
  }

  // sorting all the houses based on distance in ascending order
  sortByLowestDistance(allHouses: House[]) {
    this.houseDetails = orderBy(allHouses, ['distance'], ['asc']);
  }

  // a list of houses w hich have more then 5 rooms. Start w ith the low est number of rooms.
  sortHousesByRooms(allHouses: House[]) {
    const roomsByHouses = allHouses.filter(eachHouse => eachHouse.params.rooms > 5);
    this.housesByRooms = orderBy(roomsByHouses, ['rooms'], ['asc']);
  }

  // a list of houses that you do not have all the data for. Sort them by the street-name.
  sortHousesByStreet(allHouses: House[]) {
    this.housesByStreet = orderBy(allHouses, ['street'], ['asc']);
  }

  // move into the house that is closest to your sisters home, but only if the house has at least 10 rooms and does not cost more than
  // 5.000.000 €. If you don't know the number of rooms, or the value of the house, you do not w ant to move into the house.
  findMoveInHouse(allHouses: House[]) {
    const housesWithRoomsAndValues = allHouses.filter(eachHouse => eachHouse.params.rooms && eachHouse.params.value);
    const selectedHouse = housesWithRoomsAndValues.filter(eachHouse => eachHouse.params.rooms >= 10 && eachHouse.params.value <= 5000000);
    this.moveInHouse = (isEmpty(selectedHouse)) ? selectedHouse[0] : new House();

    this.selectedMoveInHouse = (!isEmpty(this.moveInHouse));
  }

}
