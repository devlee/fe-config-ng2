import { Component } from '@angular/core';

@Component({
  styles: [
    require('./homeHeader.css')
  ],
  template: require('./homeHeader.html')
})
export class HomeHeader {
  constructor() {
    console.log('Home Header loaded');
  }

  ngOnInit() {
    console.log('Home Header Inited');
  }
}
