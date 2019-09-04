import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BuildingsDataService {

  constructor(private http: HttpClient) { }

  getBuildingsData() {
    return this.http.get('buildingsAPI/buildings');
  }
}
