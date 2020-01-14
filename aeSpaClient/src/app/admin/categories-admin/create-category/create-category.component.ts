import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { Category } from 'src/app/domain/category';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  newCategoryForm;
  constructor(
    private categoryService: CategoriesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {  

    this.newCategoryForm = this.formBuilder
      .group({
        name: '',
        description: '',
      });
  }

  ngOnInit() {
  }

  onSubmit(category: Category){
    console.log(category);
    this.categoryService.createCategory(category)
      .subscribe(
        (result) => {
          console.log(result);
          this.router.navigateByUrl("/admin");
        }
      )
  }

}
