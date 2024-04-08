import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { AuthResponseData } from './auth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  errorMessage: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    this.errorMessage = null;
    if (authForm.invalid) {
      return;
    }
    const email = authForm.value.email;
    const password = authForm.value.password;

    let authenticationObserver: Observable<AuthResponseData>;

    this.isLoading = !this.isLoading;
    if (this.isLoginMode) {
      authenticationObserver = this.authService.login(email, password);
    } else {
      authenticationObserver = this.authService.signup(email, password);
    }

    authenticationObserver.subscribe(
      (response) => {
        console.log(response);
        this.isLoading = !this.isLoading;
        this.errorMessage = null;
        this.router.navigate(['/recipes']);
      },
      (error) => {
        console.log(error);
        this.errorMessage = error;
        this.isLoading = !this.isLoading;
      }
    );

    authForm.reset();
  }
}
