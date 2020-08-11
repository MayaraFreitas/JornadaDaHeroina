import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EpisodeComponent } from './pages/episode/episode.component';
import { IndexComponent } from './pages/index/index/index.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'episode', component: EpisodeComponent },
  { path: 'index', component: IndexComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  ];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
