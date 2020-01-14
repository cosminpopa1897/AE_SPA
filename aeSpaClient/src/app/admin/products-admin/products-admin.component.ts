import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/domain/product';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.css']
})
export class ProductsAdminComponent implements OnInit {

  @Input() productList: Product[] = [];
  constructor() { }

  ngOnInit() {
  }

}
