import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { NewsElement } from '../Interfaces';

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
    this.newsService.getNews().subscribe(
      response => this.news = response.news
      .sort((a, b) => {
        console.log(a.releasedate);
        let result = new Date(a.releasedate).getTime() - new Date(b.releasedate).getTime() ;
        // console.log(result);
        return result;
      }));
  } 
}


