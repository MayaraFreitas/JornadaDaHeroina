import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { EpisodeCardComponent } from './episode-card/episode-card.component';
import { HostCardComponent } from './host-card/host-card.component';



@NgModule({
  declarations: [IndexComponent, EpisodeCardComponent, HostCardComponent],
  exports: [IndexComponent],
  imports: [
    CommonModule
  ]
})
export class IndexModule { }
