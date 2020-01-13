import { Component, OnInit, Input } from '@angular/core';
import { products } from './products';
import { ProductsService } from '../services/products/products.service';
import { Product } from '../domain/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  @Input() products: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  
  }

  share(){
    alert("S-a facut tranzactia");
    console.log(this.products);
  }

  onNotify(){
    alert("Te cautam noi");
  }

}
