import {Component, OnInit} from '@angular/core';
import {INewsDTO} from '../../../dto/i-news-d-t-o';
import {NewsService} from '../../../service/news.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {
  listNews: INewsDTO [] = [];
  page = 0;
  totalPage = 0;
  size = 0;
  titleSearch = '';

  // teamPage: any;

  constructor(private newsService: NewsService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllNews(this.titleSearch);

  }

  getAllNews(titleSearch: string) {
    this.titleSearch = titleSearch;
    this.newsService.getAllNews(this.page, this.titleSearch).subscribe(next => {
      this.listNews = next.content;
      this.totalPage = next.totalPages;
      this.page = next.number;
      this.size = next.size;

      console.log(this.listNews);
    });
  }

  sau() {
    if (this.page < this.totalPage - 1) {
      this.page++;
      this.getAllNews(this.titleSearch);
    }
  }

  truoc() {
    if (this.page > 0) {
      this.page--;
      this.getAllNews(this.titleSearch);
    }
  }

  changePage(pageNumber: number) {
    this.page = pageNumber;
    this.newsService.getAllNews(this.page, this.titleSearch).subscribe(next => {
      this.listNews = next.content;
      this.totalPage = next.totalPages;
      this.page = next.number;
      this.size = next.size;
    });
  }
}
