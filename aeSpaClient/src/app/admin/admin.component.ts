import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products/products.service';
import { CategoriesService } from '../services/categories/categories.service';
import { Product } from '../domain/product';
import { Category } from '../domain/category';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  host: {'class': 'adminHost'}
})
export class AdminComponent implements OnInit {

  productList: Product[] = [];
  categoryList:  Category[] = [];

  constructor(private productService: ProductsService,
              private categoryService: CategoriesService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (resultProducts) => this.productList = this.productService.castJsonArrayToProductArray(resultProducts) 
    );
    this.categoryService.getCategories().subscribe(
      (resultCategories) => this.categoryList = this.categoryService.castJsonArrayToCategoryArray(resultCategories)
    );
  }

}
