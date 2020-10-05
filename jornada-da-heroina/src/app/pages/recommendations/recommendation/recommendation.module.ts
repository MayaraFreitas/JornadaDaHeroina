import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { RecommendationCardComponent } from './recommendation-card/recommendation-card.component';



@NgModule({
  declarations: [RecommendationsComponent, RecommendationCardComponent],
  exports: [RecommendationsComponent, RecommendationCardComponent],
  imports: [
    CommonModule
  ]
})
export class RecommendationModule { }
