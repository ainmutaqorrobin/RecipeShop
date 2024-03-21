import { Ingredients } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredients[]>();
  startEditIngredient = new Subject<number>();
  private ingredients: Ingredients[] = [
    new Ingredients(`Apples`, 5),
    new Ingredients(`Tomatoes`, 10),
  ];

  getAllIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(object: Ingredients) {
    this.ingredients.push(object);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(listIngredient: Ingredients[]) {
    this.ingredients.push(...listIngredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredients) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
