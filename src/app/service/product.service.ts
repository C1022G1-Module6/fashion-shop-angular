import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
// @ts-ignore
import {Page} from 'ngx-pagination/dist/pagination-controls.directive';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getProductALl(name: string, product_type_id: number, page: number): Observable<Page> {
    return this.httpClient.get<Page>("http://localhost:8080/api/user/product/list?name=" + name + "&product_type_id=" + product_type_id + "&page=" + page)
  }
}
