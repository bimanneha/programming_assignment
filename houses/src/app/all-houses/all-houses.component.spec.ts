import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortedHousesComponent } from './all-houses.component';

describe('SortedHousesComponent', () => {
  let component: SortedHousesComponent;
  let fixture: ComponentFixture<SortedHousesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortedHousesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortedHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
