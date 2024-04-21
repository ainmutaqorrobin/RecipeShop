import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrl: './recipe-start.component.css',
})
export class RecipeStartComponent implements OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  constructor(private recipeService: RecipeService) {
    this.recipes = recipeService.getRecipes();
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      },
      (error) => {}
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
