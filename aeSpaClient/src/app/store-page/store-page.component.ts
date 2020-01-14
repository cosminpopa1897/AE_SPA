import { Component, OnInit } from '@angular/core';
import { Product } from '../domain/product';
import { ProductsService } from '../services/products/products.service';
import { Category } from '../domain/category';
import { CategoriesService } from '../services/categories/categories.service';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit {

  productList: Product[] = [];
  filteredProductList: Product[] = [];
  categoryList: Category[] = [];
  selectedCategoryId: number = -1;
  _searchString: string = "";
  get searchString(): string{
    return this._searchString;
  }
  set searchString(value: string){
    this._searchString = value;
    this.filteredProductList = this.searchString ? this.filterProducts(): this.productList;

  }
  constructor(private productService: ProductsService,
              private categoryService: CategoriesService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (resultProducts) => {
        this.productList = this.productService.castJsonArrayToProductArray(resultProducts);
        this.filteredProductList = this.productList;
      } 
    )
    this.categoryService.getCategories().subscribe(
      (resultCategories) => {
        this.categoryList = this.categoryService.castJsonArrayToCategoryArray(resultCategories);
        console.log(this.categoryList);
      }
    );
  }
  
  onCategorySelected($event){
    this.selectedCategoryId = $event.id;
    this.filteredProductList = this.productList
      .filter(product => product.categories
                          .filter(category => category.id == $event.id).length != 0);
  }

  filterProducts(): Product[] {
    let filterString = this.searchString.toLocaleLowerCase();
    return this.productList.filter((product: Product) =>
      product.name.toLocaleLowerCase().indexOf(filterString) !== -1
      && (product.categories.filter(category => category.id == this.selectedCategoryId).length != 0 || this.selectedCategoryId == -1));
  }

  onCategoryFiltersClear(){
    this.filteredProductList = this.productList;
    this.selectedCategoryId = -1;
    this.searchString = "";
    
  }

}
