import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  styles: [
    require('./header.css')
  ],
  template: require('./header.html')
})
export class AppHeader {
  constructor() {
    console.log('AppHeader Loaded');
  }

  ngOnInit() {
    console.log('AppHeader Inited');
  }
}
