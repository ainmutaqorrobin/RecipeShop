import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';
@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     `Ikan Bilis Petai`,
  //     `Ikan bilis lauk sambal petai`,
  //     `https://resepichenom.com/media/917B9F3E-4E5C-4CB2-9474-344D1573A6C2.jpeg`,
  //     [
  //       new Ingredients(`20 gram Bawang Merah`, 2),
  //       new Ingredients(`15 gram Bawang Putih`, 1),
  //       new Ingredients(`5 gram belacan`, 1),
  //       new Ingredients(`300 gram ikan bilis`, 1),
  //       new Ingredients(`150 gram petai`, 1),
  //       new Ingredients(`40 gram pes cili`, 1),
  //     ]
  //   ),
  //   new Recipe(
  //     `Udang Masak Kunyit`,
  //     `Udang masak kunyit ramuan turun temurun`,
  //     `https://friedchillies.com/fc/wp-content/uploads/2021/05/udang-kunyit_N6C17831.jpg`,
  //     [
  //       new Ingredients(`6 gram bawang putih`, 1),
  //       new Ingredients(`10 gram cili padi`, 1),
  //       new Ingredients(`5 gram cili merah`, 1),
  //       new Ingredients(`150 gram bawang besar`, 1),
  //       new Ingredients(`100 gram kacang panjang`, 1),
  //       new Ingredients(`100 gram carrot`, 1),
  //       new Ingredients(`10 gram sos tiram`, 1),
  //       new Ingredients(`3 gram serbuk kunyit`, 1),
  //     ]
  //   ),
  //   new Recipe(
  //     `Daging Masak Merah`,
  //     `Daging ni warna merah`,
  //     `https://mediavariasi.com/wp-content/uploads/2024/01/IMG_0431.jpeg`,
  //     [
  //       new Ingredients(`300 gram daging`, 1),
  //       new Ingredients(`70 ml air rebusan daging`, 1),
  //       new Ingredients(`10 ml pewarna merah`, 1),
  //       new Ingredients(`3 gram bawang putih`, 1),
  //       new Ingredients(`150 gram bawang besar`, 1),
  //       new Ingredients(`10 gram cili api`, 1),
  //       new Ingredients(`15 gram cili merah`, 1),
  //       new Ingredients(`20 gram sos tiram`, 1),
  //       new Ingredients(`70 gram kacang panjang`, 1),
  //       new Ingredients(`70 gram lobak merah`, 1),
  //     ]
  //   ),
  //   new Recipe(
  //     `Daging Masak Kicap`,
  //     `Daging ni hitam, sila hati-hati`,
  //     `https://resepichenom.com/media/DSC_5432-2.jpg`,
  //     [
  //       new Ingredients(`6 gram bawang putih`, 1),
  //       new Ingredients(`40 gram cili besar`, 1),
  //       new Ingredients(`40 gram bawang besar`, 1),
  //       new Ingredients(`150 ml kicap`, 1),
  //       new Ingredients(`lada sulah`, 1.5),
  //     ]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private SLService: ShoppingListService) {}

  overrideRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
    //using slice rather than direct reference because we passing a new copy instead of original array
    return this.recipes.slice();
  }

  getRecipesFromID(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.SLService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newrecipe: Recipe) {
    this.recipes[index] = newrecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
