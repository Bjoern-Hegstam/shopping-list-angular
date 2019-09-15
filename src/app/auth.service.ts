import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class LoginData {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {
  }

  login(loginData: LoginData) {
    const url = ''; // TODO: Configure
    return this.http.post(url, loginData);
  }
}
