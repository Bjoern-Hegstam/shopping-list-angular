import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from "../environments/environment";
import { tap } from "rxjs/operators";

class LoginData {
  username: string;
  password: string;
}

export class User {
  id: string;
  role: 'USER' | 'ADMIN';
  username: string;
}

class AuthenticationResult {
  token: string;
  user: User;
}

const httpOptions = {
  headers: new HttpHeaders({
    accept: 'application/com.bhegstam.shoppinglist.auth-1.0+json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  currentUser: User;
  redirectUrl: string;

  constructor(
    private http: HttpClient
  ) {
  }

  login(loginData: LoginData) {
    const url = environment.apiUrl + '/auth';
    const encodedCredentials = btoa(`${loginData.username}:${loginData.password}`);
    httpOptions.headers = httpOptions.headers.set('Authorization', `Basic ${encodedCredentials}`);

    return this
      .http
      .post<AuthenticationResult>(url, {}, httpOptions)
      .pipe(
        tap(authResult => {
          this.token = authResult.token;
          this.currentUser = authResult.user;
        })
      );
  }

  isLoggedIn() {
    // TODO: Check expiration
    return !!this.token;
  }
}
