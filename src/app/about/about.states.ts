import {AboutComponent} from './about.component';
import {Ng2StateDeclaration} from 'ui-router-ng2/ng2/interface';

export let ABOUT_STATES: Ng2StateDeclaration = [
  {
    name: 'app.about',
    url: '/about',
    views: {
      $default: {
        component: AboutComponent
      }
    }
  }
];
