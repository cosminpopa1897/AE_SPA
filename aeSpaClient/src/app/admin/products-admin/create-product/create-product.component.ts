import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/domain/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  newProductForm;
  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {  

    this.newProductForm = this.formBuilder
      .group({
        name: '',
        code: '',
        description: '',
        price: '',
        categories: []
      });
  }

  ngOnInit() {
  }

  onSubmit(product: Product){
    if(product.categories == null)
      product.categories = [];
    this.productsService.createProduct(product)
      .subscribe(
        (result) => {
          console.log(result);
          this.router.navigateByUrl("/admin");
        }
      )
  }

}
