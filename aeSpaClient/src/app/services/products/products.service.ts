import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';
import { Product } from 'src/app/domain/product';
import { Category } from 'src/app/domain/category';
import { isArray } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsApi = "products/";
  constructor(private dataService: DataService) { }

  getProducts(){
    return this.dataService.getFromApi(this.productsApi);
  }

  castJsonToProduct(jsonObject): Product{
    let product = <Product>jsonObject;
    if(jsonObject.categories != null &&  isArray(jsonObject.categories)){
      product.categories = jsonObject.categories.map(category => <Category>category);
    }

    return product
  }
}
