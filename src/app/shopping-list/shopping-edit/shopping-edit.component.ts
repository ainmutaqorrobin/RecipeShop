import { Component } from '@angular/core';
import { Ingredients } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  // @ViewChild(`nameInput`, { static: false }) __nameInput: ElementRef;
  // @ViewChild(`amountInput`, { static: false }) __amountInput: ElementRef;

  constructor(private SLService: ShoppingListService) {}

  // addNewItem() {
  //   const ingName = this.__nameInput.nativeElement.value;
  //   const ingAmount = this.__amountInput.nativeElement.value;
  //   const newIngredient = new Ingredients(ingName, ingAmount);
  //   this.SLService.addIngredient(newIngredient);
  // }

  deleteItem() {}

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredients(value.name, value.amount);
    this.SLService.addIngredient(newIngredient);
  }
}
