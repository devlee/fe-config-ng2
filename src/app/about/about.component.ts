import { Component } from '@angular/core';
import { AboutService } from './about.service';

@Component({
  selector: 'about',
  styles: [
    require('./about.css')
  ],
  template: require('./about.html')
})
export class AboutComponent {
  constructor(private aboutService: AboutService) {
    console.log('About Loaded');
  }

  ngOnInit() {
    console.log('About Inited');
  }
}
