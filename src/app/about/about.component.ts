import { Component } from '@angular/core';

@Component({
  selector: 'about',
  styles: [
    require('./about.css')
  ],
  template: require('./about.html')
})
export class AboutComponent {
  constructor() {
    console.log('About Loaded');
  }

  ngOnInit() {
    console.log('About Inited');
  }
}
