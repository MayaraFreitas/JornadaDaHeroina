import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  interviews = new Observable<any[]>();
  constructor(public db: AngularFireDatabase) {
    this.interviews = db.list('/interviews').valueChanges();
  }

  ngOnInit(): void {
  }

}
