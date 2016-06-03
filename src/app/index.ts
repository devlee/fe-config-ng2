// App
export * from './app.component';
export * from './app.service';

import { AppState } from './app.service';
import { AboutService } from './about';

// Application wide providers
export const APP_PROVIDERS = [
  AppState,
  AboutService
];
