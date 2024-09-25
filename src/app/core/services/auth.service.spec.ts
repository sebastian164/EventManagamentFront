import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.services';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private configService: ConfigService) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    const apiUrl = this.configService.getApiUrl();
    const authEndpoint = this.configService.getAuthEndpoint();
    return this.http.post(`${apiUrl}${authEndpoint}`, credentials);
  }

  handleLogin(response: any): void {
    const token = response.token;
    sessionStorage.setItem('token', token);
  }

  logout(): void {
    sessionStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('token');
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }
}
