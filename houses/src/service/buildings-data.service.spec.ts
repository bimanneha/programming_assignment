import { TestBed } from '@angular/core/testing';

import { BuildingsDataService } from './buildings-data.service';
import {HttpClientModule} from '@angular/common/http';

describe('BuildingsDataService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
  }));

  fit('BuildingsDataService should be created', () => {
    const service: BuildingsDataService = TestBed.get(BuildingsDataService);
    expect(service).toBeTruthy();
  });

  fit('should have getBuildingsData()', () => {
    const service: BuildingsDataService = TestBed.get(BuildingsDataService);
    expect(service.getBuildingsData).toBeTruthy();
  });

  fit('getBuildingsData() should return housesData', () => {
    const service: BuildingsDataService = TestBed.get(BuildingsDataService);
    expect(service.getBuildingsData()).toEqual(this.housesData);
  });
});
