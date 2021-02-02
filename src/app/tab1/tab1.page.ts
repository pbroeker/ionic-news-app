import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { NewsElement } from '../Interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  news: any;
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getNews();
  }

  getNews(): void {
    this.newsService.getMockNews().subscribe(news => this.news = news);
  } 
}


