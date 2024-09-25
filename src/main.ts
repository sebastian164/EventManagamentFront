import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app.routing';
import { ConfigService } from './app/core/services/config.services'; 

const configService = new ConfigService();

if (configService.isProduction()) {
  configService.setProfile('production');
  enableProdMode();
} else {
  configService.setProfile('development');
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule),
    { provide: ConfigService, useValue: configService }
  ],
}).catch(err => console.error(err));