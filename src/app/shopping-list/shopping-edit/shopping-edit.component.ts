import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredients } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild(`nameInput`, { static: false }) __nameInput: ElementRef;
  @ViewChild(`amountInput`, { static: false }) __amountInput: ElementRef;
  @Output(`passIngredient`) ingredientAdded = new EventEmitter<Ingredients>();

  addNewItem() {
    const ingName = this.__nameInput.nativeElement.value;
    const ingAmount = this.__amountInput.nativeElement.value;
    const newIngredient = new Ingredients(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
