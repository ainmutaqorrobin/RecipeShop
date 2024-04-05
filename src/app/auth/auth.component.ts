import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  errorMessage: string = null;

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    if (authForm.invalid) {
      return;
    }
    const email = authForm.value.email;
    const password = authForm.value.password;

    this.isLoading = !this.isLoading;
    if (this.isLoginMode) {
      this.authService.login(email, password).subscribe(
        (response) => {
          console.log(response);
          this.isLoading = !this.isLoading;
        },
        (error) => {
          console.log(error);
          this.isLoading = !this.isLoading;
        }
      );
    } else {
      this.authService.signup(email, password).subscribe(
        (response) => {
          console.log(response);
          this.isLoading = !this.isLoading;
        },
        (error) => {
          this.errorMessage = error.error.error.message;
          this.isLoading = !this.isLoading;
        }
      );
    }

    authForm.reset();
  }
}
