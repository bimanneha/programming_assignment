import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input()
  tabFlags: {
    isAllHouses: false,
    isByDistance: false,
    isByRoom: false,
    isByStreet: false,
    isMoveIn: false
  };

  @Output()
  tabChanged = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }

  clickedNewTab(evt) {
    this.tabChanged.emit(evt);
  }

}
