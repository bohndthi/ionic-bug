// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

function muteIonicReInitializeWarning() {
  const originalWarn = console.warn;
  // tslint:disable-next-line: no-any
  const patchedWarn = (warning: any, ...optionalParams: any[]) => {
    const suppress = `Ionic Angular was already initialized. Make sure IonicModule.forRoot() is just called once.`;
    if (warning !== suppress) { originalWarn(warning, ...optionalParams); }
  };
  console.warn = patchedWarn;
}

muteIonicReInitializeWarning();

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
