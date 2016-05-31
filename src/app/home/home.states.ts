import {HomeComponent} from './home.component';
import {Ng2StateDeclaration} from 'ui-router-ng2/ng2/interface';

export let HOME_STATES: Ng2StateDeclaration = [
  {
    name: 'app.home',
    url: '/home',
    views: {
      $default: {
        component: HomeComponent
      }
    }
  }
];
