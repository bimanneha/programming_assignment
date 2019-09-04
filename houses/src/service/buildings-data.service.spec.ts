import { TestBed } from '@angular/core/testing';

import { BuildingsDataService } from './buildings-data.service';

describe('BuildingsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuildingsDataService = TestBed.get(BuildingsDataService);
    expect(service).toBeTruthy();
  });
});
