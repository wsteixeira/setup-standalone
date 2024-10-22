import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { ConfigService } from './app/config.service';
import { APP_INITIALIZER } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export function initApp(configService: ConfigService) {
  return () => configService.loadConfig();
}

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideHttpClient(), // HTTP necessário para carregar o config.json
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [ConfigService],
      multi: true,
    },
  ],
}).catch((err) => console.error(err));
