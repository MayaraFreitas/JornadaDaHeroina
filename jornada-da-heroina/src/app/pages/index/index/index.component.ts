import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  interviews = new Observable<any[]>();
  hosts = new Observable<any[]>();
  organization = new Observable<any[]>();

  constructor(public db: AngularFireDatabase) {
    this.interviews = db.list('/interviews').valueChanges();
    console.log('interviews: ', this.interviews);
    this.hosts = db.list('/hosts').valueChanges();
    this.organization = db.list('/organization').valueChanges();
  }

  ngOnInit(): void {
  }

}
