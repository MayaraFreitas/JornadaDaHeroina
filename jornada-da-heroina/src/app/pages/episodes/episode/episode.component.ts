import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  episode: any;
  constructor(private route: ActivatedRoute, public db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.db.object('/interviews/' + params.id).valueChanges().subscribe(interview => {
        this.episode = interview;
      });
    });
  }

}
