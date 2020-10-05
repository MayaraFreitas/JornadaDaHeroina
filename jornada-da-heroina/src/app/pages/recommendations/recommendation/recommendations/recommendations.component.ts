import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {

  recommendations = new Observable<any[]>();
  constructor(public db: AngularFireDatabase) {
    this.recommendations = db.list('/recommendations').valueChanges();
  }

  ngOnInit(): void {
  }

}
