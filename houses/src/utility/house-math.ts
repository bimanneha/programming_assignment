import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HouseMath {

  // calculate distance using longitude and latitude values between 2 points
  getDistanceFromLatLonInKm(startLatitude, startLongitude, endLatitude, endLongitude) {
    // Radius of the earth in km
    const R = 6371;

    const dLatitude = this.deg2rad(endLatitude - startLatitude);  // this.deg2rad below
    const dLongitude = this.deg2rad(endLongitude - startLongitude);
    const a =
      Math.sin(dLatitude / 2) * Math.sin(dLatitude / 2) +
      Math.cos(this.deg2rad(startLatitude)) * Math.cos(this.deg2rad(endLatitude)) *
      Math.sin(dLongitude / 2) * Math.sin(dLongitude / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return parseFloat((R * c).toFixed(3)); // Distance in km
  }

  deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

}
