import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './pages/index/index/index.component';
import { HostsComponent } from './pages/hosts/hosts/hosts.component';
import { EpisodesComponent } from './pages/episodes/episodes/episodes.component';
import { EpisodeComponent } from './pages/episodes/episode/episode.component';
import { RecommendationsComponent } from './pages/recommendations/recommendation/recommendations/recommendations.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hosts', component: HostsComponent },
  { path: 'episode', component: EpisodeComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: 'index', component: IndexComponent },
  { path: 'recommendations', component: RecommendationsComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  ];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
