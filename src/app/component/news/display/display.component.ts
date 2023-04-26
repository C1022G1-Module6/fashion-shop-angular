import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../../service/news.service';
import {ActivatedRoute, Router} from '@angular/router';
import {News} from '../../../model/news/news';
import {INewsDTO} from "../../../dto/i-news-d-t-o";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  listRelatedNews: INewsDTO [] = [];
  news: News;
  linkImg: string;

  constructor(private newsService: NewsService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getNews();
    this.getAllRelatedNews();
  }

  getNews() {
    this.activatedRoute.paramMap.subscribe(next => {
      // tslint:disable-next-line:radix
      const id = parseInt(next.get('id'));
      this.newsService.detailNews(id).subscribe(data => {
        this.news = data;
        this.linkImg = this.news.img;
      });
    });
  }

  getAllRelatedNews() {
    this.newsService.getAllRelatedNews().subscribe(next => {
      this.listRelatedNews = next;
    })
  }


}
