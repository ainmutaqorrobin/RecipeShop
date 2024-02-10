import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = `No status created yet`;
  serverName = ``;
  userName = ``;
  resetStatus = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreationStatus = `Server was created with name ${this.serverName}`;
  }
  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
