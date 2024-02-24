import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  @Input() recipe: Recipe;

  constructor(private SLService: ShoppingListService) {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {}

  addShoppingListCart(object: Recipe) {
    for (let i of object.ingredients) {
      this.SLService.addIngredients(i);
    }
  }
}
