import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesComponent } from './episodes/episodes.component';
import { EpisodeComponent } from './episode/episode.component';
import { PlayerComponent } from './player/player.component';
import { EpisodeCardComponent } from './episode-card/episode-card.component';

@NgModule({
  declarations: [EpisodesComponent, EpisodeCardComponent, EpisodeComponent, PlayerComponent],
  exports: [EpisodesComponent, EpisodeCardComponent, EpisodeComponent, PlayerComponent],
  imports: [
    CommonModule
  ]
})
export class EpisodesModule { }
