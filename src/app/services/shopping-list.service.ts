import { Ingredients } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredients: Ingredients[] = [
    new Ingredients(`Apples`, 5),
    new Ingredients(`Tomatoes`, 10),
  ];

  getAllIngredients() {
    return this.ingredients.slice();
  }
}
