import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})

export class BuildingsDataService {

  constructor(private http: HttpClient) { }

  getBuildingsData() {
    return this.http.get('buildingsAPI/buildings');
  }
}
