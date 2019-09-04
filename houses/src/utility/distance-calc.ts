import {House} from '../model/house';
import {HouseMath} from './house-math';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DistanceCalc {

  constructor(private houseMath: HouseMath) {

  }

  calculateDistance(eachHouse: House, sistersHouse: House) {
    const latitudeStart = eachHouse.coords.lat;
    const longitudeStart = eachHouse.coords.lon;

    const latitudeEnd = sistersHouse.coords.lat;
    const longitudeEnd = sistersHouse.coords.lon;

    eachHouse.distance = this.houseMath.getDistanceFromLatLonInKm(latitudeStart, longitudeStart, latitudeEnd, longitudeEnd);

    return eachHouse.distance;
  }
}
