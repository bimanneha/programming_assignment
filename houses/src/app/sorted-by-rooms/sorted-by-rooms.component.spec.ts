import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortedByRoomsComponent } from './sorted-by-rooms.component';
import {EachHouseComponent} from '../each-house/each-house.component';

describe('SortedByRoomsComponent', () => {
  let component: SortedByRoomsComponent;
  let fixture: ComponentFixture<SortedByRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortedByRoomsComponent, EachHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortedByRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
