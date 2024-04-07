import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponseData, UserInfo } from '../auth/auth.model';
import { BehaviorSubject, catchError, Subject, tap, throwError } from 'rxjs';
import { User } from '../auth/user.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  user = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDvp1vw0srS2tA6YT6YFxLL2GyqpDrdpDo',
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(
        catchError(this.handleError),
        tap((responseData) => {
          this.handleUser(
            responseData.email,
            responseData.localId,
            responseData.idToken,
            +responseData.expiresIn
          );
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDvp1vw0srS2tA6YT6YFxLL2GyqpDrdpDo',
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(
        catchError(this.handleError),
        tap((responseData) => {
          this.handleUser(
            responseData.email,
            responseData.localId,
            responseData.idToken,
            +responseData.expiresIn
          );
        })
      );
  }

  autoLogin() {
    const userData: UserInfo = JSON.parse(localStorage.getItem('userData'));

    if (!userData) {
      return;
    }

    const loadUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadUser.token) {
      this.user.next(loadUser);
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/signup']);
  }

  //method for handling user authentication to receive the token from backend
  private handleUser(
    email: string,
    localId: string,
    idToken: string,
    expiresIn: number
  ) {
    //create new expired date using javascript Date constructor and change expiresIn property to milisecond
    const expiredDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, localId, idToken, expiredDate);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    console.log(errorResponse);

    let errorMessage = 'Unknown error occured!';
    if (!errorResponse || !errorResponse.error || !errorResponse.error.error) {
      return throwError(() => errorMessage);
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
    return throwError(() => errorMessage);
  }
}
