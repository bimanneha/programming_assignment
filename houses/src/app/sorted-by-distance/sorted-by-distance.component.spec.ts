import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortedByDistanceComponent } from './sorted-by-distance.component';
import {EachHouseComponent} from '../each-house/each-house.component';

describe('SortedByDistanceComponent', () => {
  let component: SortedByDistanceComponent;
  let fixture: ComponentFixture<SortedByDistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortedByDistanceComponent, EachHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortedByDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create SortedByDistance Component', () => {
    expect(component).toBeTruthy();
  });
});
