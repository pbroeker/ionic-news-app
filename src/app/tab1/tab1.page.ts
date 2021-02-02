import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { NewsElement } from '../Interfaces';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  news: NewsElement[];
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getNews();
  }

  getNews(): void {
    // this.newsService.getMockNews().subscribe(news => this.news = news);
    this.newsService.getNews()
    .pipe(
      map(response => {
        return response.news
        .sort((a, b) => {
            let dateA = Date.parse(a.releasedate); 
            let dateB = Date.parse(b.releasedate);
            let result = dateA - dateB;
            console.log(result);
            return  result;
        })})
    ).subscribe(
      response => this.news = response);
  } 
}


