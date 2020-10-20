import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { InterviewCardModel } from '../../index/models/interview-card-model';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss']
})
export class EpisodeCardComponent implements OnInit {

  @Input() interview: InterviewCardModel;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoEpisode(idEpisode: number) {
    this.router.navigate(['/episode'], {  queryParams: {  id: idEpisode - 1 } });
    //this.router.navigate(['/episode', { id: idEpisode }]);
  }
}