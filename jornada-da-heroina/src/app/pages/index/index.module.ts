import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeCardComponent } from './episode-card/episode-card.component';
import { HostCardComponent } from './host-card/host-card.component';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [IndexComponent, EpisodeCardComponent, HostCardComponent],
  exports: [IndexComponent, EpisodeCardComponent, HostCardComponent],
  imports: [
    CommonModule
  ]
})
export class IndexModule { }
