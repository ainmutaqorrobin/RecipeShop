import { Component } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: `app-header`,
  templateUrl: `./header.component.html`,
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) {}
  onSaveData() {
    this.dataStorageService.saveRecipes();
  }
  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
