import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/domain/product';
import { Category } from 'src/app/domain/category';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  newProductForm;
  categories: Category[] = [];
  selectedCategories: Category[] = [];
  
  constructor(
    private categoryService: CategoriesService,
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {  
    this.categoryService.getCategories()
      .subscribe(
        (result) => this.categories = this.categoryService.castJsonArrayToCategoryArray(result),
        (error) => console.log(error)
      );
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
    product.categories = this.selectedCategories;
    this.productsService.createProduct(product)
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
