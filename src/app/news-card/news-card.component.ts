import { Component, OnInit, Input } from '@angular/core';
import { NewsElement } from '../Interfaces';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {
  @Input() 
  newsData: NewsElement;
  readStatus: boolean = false;
  contentSelection: string;
  contentSource: string;

  constructor() { }

  ngOnInit() {
    this.setContentSelector(this.newsData);
  }

  toggleStatus() {
    this.readStatus = !this.readStatus;
  }

  private setContentSelector (newsData) {
    if (Object.keys(newsData.video).length !== 0) {
      this.contentSource = '../../assets/icon_playvideo.png';
      this.contentSelection = "Video";
    } else if (newsData.imageURLs.length !== 0) {
      this.contentSource = newsData.imageURLs[0].imageURL;
      this.contentSelection = "Image";
    } else {
      this.contentSource = newsData.category.iconURL;
      this.contentSelection = "Icon";
    }
  }
}
