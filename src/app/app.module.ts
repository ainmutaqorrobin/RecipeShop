import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './services/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './services/recipe.service';
import { DataStorageService } from './services/data-storage.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RecipeResolverService } from './services/recipe.resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { RecipesModule } from './recipes/recipes.modules';
import { RecipesRoutingModule } from './recipes/recipes-routing.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AuthComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule,
    RecipesRoutingModule,
    ShoppingListModule,
    SharedModule,
  ],
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
  bootstrap: [AppComponent],
})
export class AppModule {}
