import { Component, ComponentFactoryResolver } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { AuthResponseData } from './auth.model';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  errorMessage: string = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
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
        this.showErrorAlert(this.errorMessage);
        this.isLoading = !this.isLoading;
      }
    );

    authForm.reset();
  }

  private showErrorAlert(message: string) {
    // const alertComponent = new AlertComponent();
    const alertComponentFactory =
      this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
  }

  onCloseError() {
    this.errorMessage = null;
  }
}
