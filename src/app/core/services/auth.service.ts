import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { ConfigService } from './config.services'; 
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpService: HttpService, private configService: ConfigService) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    const apiUrl = this.configService.getApiUrl();
    const authEndpoint = this.configService.getAuthEndpoint();
    return this.httpService.post(`${apiUrl}${authEndpoint}`, credentials).pipe(
      tap(response => {
        const token = response.headers.get('Authorization');
        if (token) {
          this.handleLogin(token);
        }
      })
    );
  }

  handleLogin(token: string): void {
    sessionStorage.setItem('Authorization', token);
  }

  logout(): void {
    sessionStorage.removeItem('Authorization');
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('Authorization');
  }

  getToken(): string | null {
    return sessionStorage.getItem('Authorization');
  }
}