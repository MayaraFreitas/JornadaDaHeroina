import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterviewCard } from './models/interview-card-model';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  url = 'https://api.sheetson.com'; // api rest fake

  constructor(private httpClient: HttpClient) { }

   // Headers
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}
