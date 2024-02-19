import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: `app-header`,
  templateUrl: `./header.component.html`,
})
export class HeaderComponent {
  collapsed: boolean = true;
  @Output() optionChoosed = new EventEmitter<string>();

  onClick(option: string) {
    this.optionChoosed.emit(option);
  }
}
