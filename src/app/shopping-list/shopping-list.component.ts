import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[];

  constructor(private SLService: ShoppingListService) {}
  ngOnInit(): void {
    this.ingredients = this.SLService.getAllIngredients();
    this.SLService.ingredientsChanged.subscribe((receiveItem) => {
      this.ingredients = receiveItem;
    });
  }
}
