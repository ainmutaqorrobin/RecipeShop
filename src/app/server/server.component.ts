import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverID:number = 10;
  serverStatus:string = `Offline`;

  constructor() {
    this.serverStatus = Math.random()>0.5? `Online`:`Offline`;
  }

  callStyle(){
    return this.serverStatus===`Offline`?  `red` :  `green`;
  }
}
