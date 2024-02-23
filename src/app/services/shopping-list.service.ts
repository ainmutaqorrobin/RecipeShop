import { EventEmitter, SimpleChange } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredients[]>();
  private ingredients: Ingredients[] = [
    new Ingredients(`Apples`, 5),
    new Ingredients(`Tomatoes`, 10),
  ];

  getAllIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(object: Ingredients) {
    this.ingredients.push(object);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  deleteIngredients(id:PointerEvent) {
  }
}
