import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponseData } from '../auth/auth.model';
import { catchError, throwError } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDvp1vw0srS2tA6YT6YFxLL2GyqpDrdpDo',
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(catchError(this.handleError));
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDvp1vw0srS2tA6YT6YFxLL2GyqpDrdpDo',
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    console.log(errorResponse);

    let errorMessage = 'Unknown error occured!';
    if (!errorResponse || !errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email is already exist.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'This password is not correct.';
        break;
      case 'INVALID_CUSTOM_TOKEN':
        errorMessage =
          'The custom token format is incorrect or the token is invalid for some reason.';
        break;
      case 'CREDENTIAL_MISMATCH':
        errorMessage =
          'The custom token corresponds to a different Firebase project.';
        break;
      case 'INVALID_EMAIL':
        errorMessage = 'The email address is badly formatted.';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage =
          'We have blocked all requests from this device due to unusual activity. Try again later.';
        break;
    }
    return throwError(errorMessage);
  }
}
