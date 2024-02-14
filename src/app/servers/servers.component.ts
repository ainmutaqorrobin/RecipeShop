import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  serverStatus: boolean = false;
  resetStatus: boolean = false;
  allowNewServer: boolean = false;
  serverCreationStatus: string = `No status created yet`;
  serverName: string = `TestServer3`;
  userName: string = ``;
  servers: Array<string> = [`TestServer1`, `TestServer2`];

  detailStatus: boolean = false;
  detailLog: Array<Date> = [];

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? true : false;
  }

  ngOnInit() {}

  onCreateServer() {
    this.servers.push(this.serverName);
  }
  callStyle() {
    return this.serverStatus ? `green` : `red`;
  }
  displayDetail() {
    this.detailLog.push(new Date());
    this.detailStatus = !this.detailStatus;
  }
}
