import { Component } from '@angular/core';

@Component({
  selector: 'home',
  directives: [  ],
  styles: [
    require('./home.css')
  ],
  template: require('./home.html')
})
export class HomeComponent {
  constructor() {
    console.log('Home loaded');
  }

  ngOnInit() {
    console.log('Home Inited');
  }
}
