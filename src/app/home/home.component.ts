import { Component } from '@angular/core';

import { Layout } from '../layout';

import { HomeHeader } from './homeHeader';

@Component({
  selector: 'home',
  directives: [ Layout ],
  styles: [
    require('./home.css')
  ],
  template: require('./home.html')
})
export class Home {
  constructor() {
    console.log('Home loaded');
  }

  ngOnInit() {
    console.log('Home Inited');
  }
}
