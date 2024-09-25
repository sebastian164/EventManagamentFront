import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.services';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient, private configService: ConfigService) {}

  private getHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('Authorization');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url, { headers: this.getHeaders() });
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body, { headers: this.getHeaders() });
  }

  put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(url, body, { headers: this.getHeaders() });
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url, { headers: this.getHeaders() });
  }
}
