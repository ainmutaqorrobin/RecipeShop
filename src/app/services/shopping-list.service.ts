import { Ingredients } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredients[]>();
  private ingredients: Ingredients[] = [
    new Ingredients(`Apples`, 5),
    new Ingredients(`Tomatoes`, 10),
  ];

  getAllIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(object: Ingredients) {
    this.ingredients.push(object);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(listIngredient: Ingredients[]) {
    this.ingredients.push(...listIngredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
