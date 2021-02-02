import { Injectable } from '@angular/core';
import { NewsElement } from '../Interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsUrl = 'https://news-app-2e997.web.app/news';
  private mockUrl = '../../assets/news.json';
  constructor(
    private http: HttpClient,
  ) { }

  getNews(): Observable<any> {
    return this.http.get<any>(this.newsUrl);
  }

  getMockNews(): Observable<any> {
    return this.http.get<any>(this.mockUrl).pipe(
      map(response => response.news))
  }
}
