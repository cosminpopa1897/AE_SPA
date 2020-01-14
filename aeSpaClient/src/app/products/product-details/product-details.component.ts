import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import {ShoppingCartService} from '../../services/shoppingCart/shopping-cart.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor( 
    private route: ActivatedRoute,
    private productsService: ProductsService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let index = +params.get('productId');
      this.productsService.getProductById(index)
        .subscribe(
          result => this.product = this.productsService.castJsonToProduct(result) 
        )
    });
  }

}
