import { Injectable } from '@angular/core';
import { CONFIG } from '../../config/config';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private profile: 'development' | 'production' = 'development';

  constructor() {}

  setProfile(profile: 'development' | 'production'): void {
    this.profile = profile;
  }

  getApiUrl(): string {
    return CONFIG[this.profile].apiUrl;
  }

  getAuthEndpoint(): string {
    return CONFIG.authEndpoint;
  }

  isProduction(): boolean{
    return this.profile==='production';
  }
}
