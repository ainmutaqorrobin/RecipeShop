import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../../services/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  @Output() isLoading = new EventEmitter<boolean>();

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.onLoadingScreen(true);
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
        this.onLoadingScreen(false);
      },
      (error) => {
        this.onLoadingScreen(false);
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onLoadingScreen(value: boolean) {
    this.isLoading.emit(value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
