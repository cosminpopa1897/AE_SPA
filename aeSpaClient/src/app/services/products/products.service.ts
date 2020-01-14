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

  getProductById(id: number){
    return this.dataService.getByIdFromApi(this.productsApi, id);
  }

  createProduct(product: Product){
    product.id = 0;
    return this.dataService.postToApi(this.productsApi, product);
  }

  updateProduct(product: Product){
    return this.dataService.putToApi(this.productsApi, product.id, product);  
  }

  deleteProduct(id: number){
    return this.dataService.deleteFromApi(this.productsApi, id);
  }

  castJsonToProduct(jsonObject): Product{
    let product = <Product>jsonObject;
    if(jsonObject.categories != null &&  isArray(jsonObject.categories)){
      product.categories = jsonObject.categories.map(category => <Category>category);
    }

    return product;
  }

  castJsonArrayToProductArray(jsonArray): Product[]{
    return jsonArray.map(jsonProduct => this.castJsonToProduct(jsonProduct));
  }
}
