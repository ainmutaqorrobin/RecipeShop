import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { DataStorageService } from './services/data-storage.service';
import { RecipeResolverService } from './services/recipe.resolver.service';
import { RecipeService } from './services/recipe.service';
import { ShoppingListService } from './services/shopping-list.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';

@NgModule({
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    RecipeResolverService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
