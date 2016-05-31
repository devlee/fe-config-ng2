import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  styles: [
    require('./footer.css')
  ],
  template: require('./footer.html')
})
export class AppFooter {
  constructor() {
    console.log('AppFooter Loaded');
  }
  ngOnInit() {
    console.log('AppFooter Inited');
  }
}
