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
    aboutService.getAuthorName()
                .subscribe(
                  data => console.log(data, 1),
                  err => console.error(err, 2)
                 );
  }

  ngOnInit() {
    console.log('About Inited');
  }
}
