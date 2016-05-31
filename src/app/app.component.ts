/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { UIROUTER_DIRECTIVES } from 'ui-router-ng2';

import { AppState } from './app.service';

import { AppHeader } from './header';

import { AppFooter } from './footer';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ UIROUTER_DIRECTIVES, AppHeader, AppFooter ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('./app.css')
  ],
  template: `
    <app-header></app-header>
    <app-footer></app-footer>
    `
})
export class AppComponent {
  public angularclassLogo: String = 'assets/img/angularclass-avatar.png';
  public loading: boolean = false;
  public name: String = 'fe-config-ng2';
  public email: String = 'devlee@outlook.com';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
