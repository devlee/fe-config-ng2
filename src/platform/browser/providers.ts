/*
 * These are globally available services in any component or any other service
 */

// Angular 2
// import { FORM_PROVIDERS, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FORM_PROVIDERS,
         LocationStrategy,
         PathLocationStrategy,
         PlatformLocation} from '@angular/common';
import { BrowserPlatformLocation } from '@angular/platform-browser';
// Angular 2 Http
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';
// Angular 2 Router
// import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
// Angular 2 UIRouter
import { UIROUTER_PROVIDERS, UIRouterConfig } from 'ui-router-ng2';
import { MyUIRouterConfig } from './ui-router/router.config';
// Angular 2 Material
// TODO(gdi2290): replace with @angular2-material/all
import { MATERIAL_PROVIDERS } from './angular2-material2';
// console.log(PlatformLocation);
/*
* Application Providers/Directives/Pipes
* providers/directives/pipes that only live in our browser environment
*/
export const APPLICATION_PROVIDERS = [
  ...FORM_PROVIDERS,
  ...HTTP_PROVIDERS,
  ...JSONP_PROVIDERS,
  // ...ROUTER_PROVIDERS,
  ...MATERIAL_PROVIDERS,
  ...UIROUTER_PROVIDERS,
  {provide: LocationStrategy, useClass: PathLocationStrategy },
  {provide: PlatformLocation, useClass: BrowserPlatformLocation },
  {provide: UIRouterConfig, useClass: MyUIRouterConfig }
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
