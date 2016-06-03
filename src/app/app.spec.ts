import {
  beforeEachProviders,
  inject,
  injectAsync,
  it
} from '@angular/core/testing';

// Load the implementations that should be tested
import { AppComponent } from './app.component';
import { AppState } from './app.service';

describe('AppComponent', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    AppState,
    AppComponent
  ]);

  it('should have a email', inject([ AppComponent ], (app) => {
    expect(app.email).toEqual('devlee@outlook.com');
  }));

});
