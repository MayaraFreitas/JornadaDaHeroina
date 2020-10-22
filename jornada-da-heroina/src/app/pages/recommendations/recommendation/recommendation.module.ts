import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [RecommendationsComponent],
  exports: [RecommendationsComponent],
  imports: [
    CommonModule, SharedModule
  ]
})
export class RecommendationModule { }
