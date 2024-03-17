import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[];
  private activatedSubject: Subscription;
  constructor(private SLService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.SLService.getAllIngredients();
    this.activatedSubject = this.SLService.ingredientsChanged.subscribe(
      (receiveItem) => {
        this.ingredients = receiveItem;
      }
    );
  }

  onEditItem(index: number) {
    this.SLService.startEditIngredient.next(index);
  }

  ngOnDestroy(): void {
    this.activatedSubject.unsubscribe();
  }
}
