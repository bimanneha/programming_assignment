import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortedByStreetComponent } from './sorted-by-street.component';

describe('SortedByStreetComponent', () => {
  let component: SortedByStreetComponent;
  let fixture: ComponentFixture<SortedByStreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortedByStreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortedByStreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
