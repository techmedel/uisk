import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export function getBaseUrlCan() {
  if (environment.production) 
    return 'http://192.168.1.222:81/ap'
  else return 'http://192.168.1.222:81/api'
}

if (environment.production) {
  enableProdMode();
}

const providers = [
  { provide: 'ur_api_htsk', useFactory: getBaseUrlCan, deps: [] },
];

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
