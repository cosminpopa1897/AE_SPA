import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  items = [];
  constructor(
    private httpClient: HttpClient,
    private dataService: DataService
  ) { }
  
  addToCart(product){
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    
    return this.httpClient.get('/assets/shipping.json');
  }
  
  getTestData(){
    
    return this.httpClient.get('http://127.0.0.1:8000/products');
  }
}
