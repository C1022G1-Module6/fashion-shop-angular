import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {INewsDTO} from '../dto/i-news-d-t-o';
import {News} from '../model/news/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) {
  }

  getAllNews(page: number, titleSearch: string): Observable<any> {
    console.log(titleSearch);
    return this.httpClient.get<INewsDTO[]>('http://localhost:8080/api-news/listNews?page=' + page + '&tittleSearch=' + titleSearch);
  }

  addNews(news: News): Observable<any> {
    return this.httpClient.post<News>('http://localhost:8080/api-news/createNews', news);
  }

  detailNews(idNews: number): Observable<any> {
    return this.httpClient.get<INewsDTO>('http://localhost:8080/api-news/detailNews?idNews=' + idNews);
  }
}
