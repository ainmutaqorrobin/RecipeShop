import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedAbove = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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
  constructor() {}

  ngOnInit(): void {}

  recipeSelected(recipeElement: Recipe) {
    this.recipeSelectedAbove.emit(recipeElement);
  }
}
