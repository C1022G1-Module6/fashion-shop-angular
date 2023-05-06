import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/product/product';
import {ProductService} from '../../../service/product.service';
import {ProductTypeService} from '../../../service/product-type.service';
import {ProductType} from '../../../model/product/product-type';
import Swal from 'sweetalert2';
import {ProjectJson} from '../../../model/product/project-json';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  productList: Product[];
  searchInput = '';
  page = 1;
  productTypeList: ProductType[] = [];
  teamPage!: ProjectJson;
  id: number;

  constructor(private productService: ProductService,
              private productTypeService: ProductTypeService) {

  }

  ngOnInit(): void {
    this.productTypeService.getAllProductType().subscribe(data => {
      console.log(data);
      this.productTypeList = data;
    })

    this.getAll(0);
  }

  getAll(page: number) {
    this.productService.getProductALl(this.searchInput,0, page).subscribe(data => {
      console.log(data);
      if (data.length == 0) {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Không tìm thấy sản phẩm',
          showConfirmButton: false,
          timer: 3000
        });
      }else {
        window.scrollTo(700,900)
        this.productList = data.content;
        this.teamPage = data;
      }
    });

  }

  changePage(page: number) {
    window.scrollTo(700,900)
    this.getAll(page);
  }

  search(name: string) {
    this.page = 0;
    this.searchInput = name;
    this.productList = [];
    this.getAll(this.page);
  }
}
