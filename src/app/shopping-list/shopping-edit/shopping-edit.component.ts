import { Component } from '@angular/core';
import { Recipe } from '../../recipes/recipe.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  nameInput: string;
  amountInput: string;

  addNewItem(
    localNameInput: HTMLInputElement,
    localAmountInput: HTMLInputElement
  ) {
    this.nameInput = localNameInput.value;
    this.amountInput = localAmountInput.value;

    console.log(
      `this.nameInput is ` +
        this.nameInput +
        ` and this.amountInput is ` +
        this.amountInput
    );
  }
}
