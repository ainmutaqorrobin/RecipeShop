import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      `Recipe 1`,
      `recipe 1 descrition will append here`,
      `https://upload.wikimedia.org/wikipedia/commons/0/0b/Recipe_Unlimited_logo.png`
    ),
    new Recipe(
      `Recipe 2`,
      `recipe 2 descrition will append here`,
      `https://upload.wikimedia.org/wikipedia/commons/0/0b/Recipe_Unlimited_logo.png`
    ),
    new Recipe(
      `Recipe 3`,
      `recipe 3 descrition will append here`,
      `https://upload.wikimedia.org/wikipedia/commons/0/0b/Recipe_Unlimited_logo.png`
    ),
    new Recipe(
      `Recipe 4`,
      `recipe 4 descrition will append here`,
      `https://upload.wikimedia.org/wikipedia/commons/0/0b/Recipe_Unlimited_logo.png`
    ),
  ];

  getRecipes() {
    //using slice rather than direct reference because we passing a new copy instead of original array
    return this.recipes.slice();
  }
}
