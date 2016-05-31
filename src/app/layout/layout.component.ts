import { Component } from '@angular/core';

@Component({
  selector: 'layout',
  styles: [
    require('./layout.css')
  ],
  template: require('./layout.html')
})
export class Layout {
  isLeftAside = true;
  constructor() {
    console.log('Layout loaded');
  }

  ngOnInit() {
    console.log('Layout inited');
  }
}
