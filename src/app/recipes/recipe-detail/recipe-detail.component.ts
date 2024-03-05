import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipesFromID(this.id);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {}

  addToShoppingListCart() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
