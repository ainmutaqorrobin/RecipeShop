import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  @Input() message: string = null;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
