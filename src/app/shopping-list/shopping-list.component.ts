import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  providers: [ShoppingListService],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[];

  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getAllIngredients();
  }

  onAddedIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
  }
}
