import { Component, OnInit } from '@angular/core';
import { products } from './products';
import { ProductsService } from '../services/products/products.service';
import { Product } from '../domain/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
   products = products

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(
      (results) => this.products = (<any[]>results).map(result => this.productsService.castJsonToProduct(result)),
      (error) => console.log(error)
    );
  }

  share(){
    alert("S-a facut tranzactia");
    console.log(this.products);
  }

  onNotify(){
    alert("Te cautam noi");
  }

}
