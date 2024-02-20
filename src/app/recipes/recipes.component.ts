import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit{
  selectedRecipeList: Recipe;

  constructor(){

  }

  ngOnInit(): void {
    
  }
  
  
}
