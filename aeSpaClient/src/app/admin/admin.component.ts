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
  isProductsGridVisible: boolean = false;
  categoryList:  Category[] = [];
  isCategoriesGridVisible: boolean = false;

  constructor(private productService: ProductsService,
              private categoryService: CategoriesService) { }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  toggleProducts(){
    this.isProductsGridVisible = !this.isProductsGridVisible;
    if(this.isProductsGridVisible)
      this.getProducts();
  }

  toggleCategories(){
    this.isCategoriesGridVisible = !this.isCategoriesGridVisible;
    if(this.isCategoriesGridVisible)
      this.getCategories();
  }

  onCategoryDelete($event){
    if($event.id != null)
      this.deleteCategory($event.id);
  }

  deleteCategory(id:number){
    this.categoryService.deleteCategory(id)
      .subscribe(
        () => this.getCategories()
      )
  }

  deleteProduct(id:number){
    
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      (resultProducts) => this.assignProductResults(resultProducts)
    );
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(
      (resultCategories) => this.categoryList = this.categoryService.castJsonArrayToCategoryArray(resultCategories)
    );
  }
  assignProductResults(resultProducts){
    this.productList = this.productService.castJsonArrayToProductArray(resultProducts);
  }

  assignCategoryResults(resultCategories){
    this.categoryList = this.categoryService.castJsonArrayToCategoryArray(resultCategories)
  }

}
