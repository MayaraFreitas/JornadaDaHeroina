import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { IndexModule } from './pages/index/index.module';
import { HostModule } from './pages/hosts/host.module';
import { EpisodesModule } from './pages/episodes/episodes.module';
import { RecommendationModule } from './pages/recommendations/recommendation/recommendation.module';
import { SharedModule } from './pages/shared/shared.module';
import { PostsModule } from './pages/posts/posts.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    IndexModule,
    EpisodesModule,
    RecommendationModule,
    HostModule,
    PostsModule,
    AngularFireModule.initializeApp(environment.firebase, 'jornada-da-heroina'),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
