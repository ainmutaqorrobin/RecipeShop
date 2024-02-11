import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = `No status created yet`;
  serverStatus = false;
  serverName: string;
  userName = ``;
  resetStatus = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverStatus = true;
    this.serverCreationStatus = `Server was created `;
    console.log(`ServerName variable is ` + this.serverName);
  }
  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
