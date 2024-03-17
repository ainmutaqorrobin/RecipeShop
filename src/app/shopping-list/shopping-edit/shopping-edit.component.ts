import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { FormControl, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild(`nameInput`, { static: false }) __nameInput: ElementRef;
  // @ViewChild(`amountInput`, { static: false }) __amountInput: ElementRef;
  @ViewChild('form', { static: false }) SLForm: NgForm;
  subscription: Subscription;
  editMode: boolean;
  editedIngredientIndex: number;
  editedItem: Ingredients;

  constructor(private SLService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.SLService.startEditIngredient.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedIngredientIndex = index;
        this.editedItem = this.SLService.getIngredient(index);
        this.SLForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

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
    if (this.editMode)
      this.SLService.updateIngredient(
        this.editedIngredientIndex,
        newIngredient
      );
    else this.SLService.addIngredient(newIngredient);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
