import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveInHouseComponent } from './move-in-house.component';
import {EachHouseComponent} from '../each-house/each-house.component';

describe('MoveInHouseComponent', () => {
  let component: MoveInHouseComponent;
  let fixture: ComponentFixture<MoveInHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveInHouseComponent, EachHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveInHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
