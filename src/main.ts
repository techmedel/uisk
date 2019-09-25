import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export function getBaseUrlCan() {
  if (environment.production) 
    return 'http://cnsfdesprorr:6100/api'
  else return 'http://localhost:5000/api'
}

if (environment.production) {
  enableProdMode();
}

const providers = [
  { provide: 'URL_CAN', useFactory: getBaseUrlCan, deps: [] },
];

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
