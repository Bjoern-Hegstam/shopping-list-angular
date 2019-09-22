import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthStoreState } from '../root-store/auth-store';

const httpOptions = {
  headers: new HttpHeaders({
    accept: 'application/com.bhegstam.shoppinglist.auth-1.0+json'
  })
};

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const url = environment.apiUrl + '/auth';
    const encodedCredentials = btoa(`${username}:${password}`);
    httpOptions.headers = httpOptions.headers.set('Authorization', `Basic ${encodedCredentials}`);

    return this.http.post<AuthStoreState.AuthenticationResult>(url, {}, httpOptions);
  }
}
