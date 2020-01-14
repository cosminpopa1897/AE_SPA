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

  getProducCategoriesString(product: Product){
    let categoriesString = "";
    for (let index = 0; index < product.categories.length; index++) {
      const category = product.categories[index];
      categoriesString =`${categoriesString} ${category.name}`;
      if(index != product.categories.length -1)
        categoriesString + ",";
    }

    return categoriesString != "" ? categoriesString : "N/A";
  }

}
