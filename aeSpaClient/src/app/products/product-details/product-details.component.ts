import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import {ShoppingCartService} from '../../services/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor( 
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let index = +params.get('productId');
      this.product = products[index];
    });
  }

  addToCart(product){
    this.shoppingCartService.addToCart(product);
    alert("Te tinem minte");
  }

}
