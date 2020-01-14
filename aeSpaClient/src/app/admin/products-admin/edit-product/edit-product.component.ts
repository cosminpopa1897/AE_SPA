import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { Product } from 'src/app/domain/product';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/domain/category';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product;
  productForm;
  categories: Category[] = [];
  selectedCategories: Category[] = [];
  constructor(
    private categoryService: CategoriesService,
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {  
    this.categoryService.getCategories()
    .subscribe(
      (result) => this.categories = this.categoryService.castJsonArrayToCategoryArray(result),
      (error) => console.log(error)
    );
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
            this.selectedCategories = this.product.categories;
          },
          (error) => console.log(error)
        );
    });
  }

  onSubmit(product: Product){
    product.categories = this.selectedCategories;
    this.product = {...this.product, ...product};
    this.updateCategory();
  }

  updateCategory(){
    this.productsService.updateProduct(this.product)
      .subscribe(
        (result) => {
          console.log(result);
          this.router.navigateByUrl("/admin");
        }
      )
  }

  onCategorySelect(event){
    let categoryId = event.target.value;
    let isSelected = false;
    for (const category of this.selectedCategories) {
      if(category.id == categoryId){
        isSelected = true;
      }
    }
    if(!isSelected){
      for (const category of this.categories) {
        if(category.id == categoryId){
          this.selectedCategories.push(category);
        }
      }
    }
  }

  removeCategory(categoryId: number){
    let indexToRemove = -1;
    for (let index = 0; index < this.selectedCategories.length; index++) {
      const category = this.selectedCategories[index];
      if(category.id == categoryId){
        indexToRemove = index;
      }
    }

    if(indexToRemove != -1){
      this.selectedCategories.splice(indexToRemove, 1);
    }
  }

}
