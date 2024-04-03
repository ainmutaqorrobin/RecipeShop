import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponseData } from '../auth/auth.model';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDvp1vw0srS2tA6YT6YFxLL2GyqpDrdpDo',
      { email: email, password: password, returnSecureToken: true }
    );
  }
}
