import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Output()
  tabChanged = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }

  clickedNewTab(evt) {
    console.log('evt value inside nav', evt);
    this.tabChanged.emit(evt);
  }

}
