import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/domain/category';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  category: Category;
  categoryForm;
  constructor(
    private categoryService: CategoriesService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {  

    this.categoryForm = this.formBuilder
      .group({
        name: '',
        description: '',
      });
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      debugger;
      let id = +params.get('id');
      this.categoryService.getCategoryById(id)
        .subscribe(
          (result) => {
            this.category = this.categoryService.castJsonToCategory(result)
            this.categoryForm = this.formBuilder
                                  .group({
                                    name: this.category.name,
                                    description: this.category.description,
                                  });
          },
          (error) => console.log(error)
        );
    });
  }

  onSubmit(category: Category){
    this.category = {...this.category, ...category}
    this.updateCategory();
  }

  updateCategory(){
    this.categoryService.updateCategory(this.category)
      .subscribe(
        (result) => {
          console.log(result);
          this.router.navigateByUrl("/admin");
        }
      )
  }

}
