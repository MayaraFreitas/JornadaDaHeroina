import { Component, OnInit, Input } from '@angular/core';
import { InterviewCardModel } from '../models/interview-card-model';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss']
})
export class EpisodeCardComponent implements OnInit {

  @Input() interview: InterviewCardModel;
  constructor() { }

  ngOnInit(): void {
  }

}
