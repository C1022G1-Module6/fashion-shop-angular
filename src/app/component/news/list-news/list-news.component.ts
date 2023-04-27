import {Component, OnInit} from '@angular/core';
import {INewsDTO} from '../../../dto/i-news-d-t-o';
import {NewsService} from '../../../service/news.service';
import {Router} from '@angular/router';
import {ProjectJson} from "../../../model/product/project-json";
import {ProjectJson1} from "../../../model/news/project-json1";

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {
  listNews: INewsDTO [] = [];
  page = 0;
  size = 0;
  titleSearch = '';
  teamPage!: ProjectJson1;



  constructor(private newsService: NewsService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllNews(this.titleSearch,0);
  }

  getAllNews(titleSearch: string,page: number) {
    this.page = page;
    this.titleSearch = titleSearch;
    this.newsService.getAllNews(this.page, this.titleSearch).subscribe(next => {
      // @ts-ignore
      this.listNews = next.content;
      console.log(next);
      // @ts-ignore
      this.teamPage = next;

      console.log(this.listNews);
    });
  }

  changePage(page: number) {
    this.getAllNews(this.titleSearch,page);

  }




}
