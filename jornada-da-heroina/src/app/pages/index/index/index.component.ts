import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  organization = new Observable<any[]>();

  constructor(public db: AngularFireDatabase, private router: Router) {
    this.organization = db.list('/organization').valueChanges();
  }

  ngOnInit(): void {
  }

  goTo(route: string) {
    this.router.navigate(['/' + route]);
  }
}
