import { Component, Input, OnInit } from '@angular/core';
import { Recommendation } from '../Model/recommendation-model';

@Component({
  selector: 'app-recommendation-card',
  templateUrl: './recommendation-card.component.html',
  styleUrls: ['./recommendation-card.component.scss']
})
export class RecommendationCardComponent implements OnInit {

  @Input() recommendation: Recommendation;

  constructor() { }

  ngOnInit(): void {
  }

}
