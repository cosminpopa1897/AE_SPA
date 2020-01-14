import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { Product } from 'src/app/domain/product';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product;
  productForm;
  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {  

    this.productForm = this.formBuilder
      .group({
        name: '',
        code: '',
        description: '',
        price: '',
        categories: []
      });
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = +params.get('id');
      this.productsService.getProductById(id)
        .subscribe(
          (result) => {
            this.product = this.productsService.castJsonToProduct(result)
            console.log(this.product);
            this.productForm = this.formBuilder
                                  .group({
                                    name: this.product.name,
                                    code: this.product.code,
                                    description: this.product.description,
                                    price: this.product.price,
                                  });
          },
          (error) => console.log(error)
        );
    });
  }

  onSubmit(product: Product){
    this.product = {...this.product, ...product}
    this.updateCategory();
  }

  updateCategory(){
    this.product.categories = [];
    this.productsService.updateProduct(this.product)
      .subscribe(
        (result) => {
          console.log(result);
          this.router.navigateByUrl("/admin");
        }
      )
  }

}
