import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {}
}
