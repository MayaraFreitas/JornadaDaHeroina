import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.scss']
})
export class HostsComponent implements OnInit {

  hosts = new Observable<any[]>();
  constructor(public db: AngularFireDatabase) {
    this.hosts = db.list('/hosts').valueChanges();
  }

  ngOnInit(): void {
  }
}
