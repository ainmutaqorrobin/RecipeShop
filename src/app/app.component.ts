import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [
    `
      h3 {
        color: dodgerblue;
      }
    `,
  ],
})
export class AppComponent {
  showsecret: boolean = false;
  log: Array<number> = [];

  onToggleDetails() {
    this.showsecret=!this.showsecret;
  }
}
