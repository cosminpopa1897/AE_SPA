import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts;
  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  async ngOnInit() {
    this.shippingCosts = this.shoppingCartService.getShippingPrices();
    let testValues = this.shoppingCartService.getTestData().subscribe(
      result => console.log(result),
      error => console.log(error))
  }

}
