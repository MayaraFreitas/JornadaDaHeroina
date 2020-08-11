import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { EpisodeComponent } from './pages/episode/episode.component';
import { IndexModule } from './pages/index/index.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EpisodeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IndexModule,
    AngularFireModule.initializeApp(environment.firebase, 'jornada-da-heroina'),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
