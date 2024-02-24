import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      `Recipe 1`,
      `recipe 1 descrition will append here`,
      `https://upload.wikimedia.org/wikipedia/commons/0/0b/Recipe_Unlimited_logo.png`,
      [
        new Ingredients(`Tomato`, 5),
        new Ingredients(`Strawberry`, 10),
        new Ingredients(`Vegetable`, 20),
      ]
    ),
    new Recipe(
      `Recipe 2`,
      `recipe 2 descrition will append here`,
      `https://upload.wikimedia.org/wikipedia/commons/0/0b/Recipe_Unlimited_logo.png`,
      [
        new Ingredients(`Daun Saderi`, 5),
        new Ingredients(`Tembikai`, 10),
        new Ingredients(`Susu Kambing`, 20),
      ]
    ),
    new Recipe(
      `Recipe 3`,
      `recipe 3 descrition will append here`,
      `https://upload.wikimedia.org/wikipedia/commons/0/0b/Recipe_Unlimited_logo.png`,
      [
        new Ingredients(`Belacan`, 5),
        new Ingredients(`Bawang`, 10),
        new Ingredients(`Sambal ikan bilis`, 20),
      ]
    ),
    new Recipe(
      `Recipe 4`,
      `recipe 4 descrition will append here`,
      `https://upload.wikimedia.org/wikipedia/commons/0/0b/Recipe_Unlimited_logo.png`,
      [
        new Ingredients(`Kicap`, 5),
        new Ingredients(`Sos Cili`, 10),
        new Ingredients(`Halia`, 20),
      ]
    ),
  ];

  constructor(private SLService: ShoppingListService) {}
  getRecipes() {
    //using slice rather than direct reference because we passing a new copy instead of original array
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.SLService.addIngredients(ingredients);
  }
}
