import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: `app-header`,
  templateUrl: `./header.component.html`,
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  private userSubs: Subscription;
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userSubs = this.authService.user.subscribe((user) => {
      if (user) {
        this.isAuthenticated = !this.isAuthenticated;
      } else this.isAuthenticated = false;
    });
  }

  onSaveData() {
    this.dataStorageService.saveRecipes();
  }
  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
  onLogOut() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSubs.unsubscribe();
  }
}
