import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


import { enableAkitaProdMode, persistState, akitaConfig } from '@datorama/akita';
import { BUILD_ENVIRONMENT } from './build/build-environment';


if (BUILD_ENVIRONMENT.production) {
  enableProdMode();
  enableAkitaProdMode();
}

akitaConfig({ resettable: true });
persistState();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
