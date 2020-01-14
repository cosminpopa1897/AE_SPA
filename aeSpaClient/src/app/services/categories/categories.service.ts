import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';
import { Category } from 'src/app/domain/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categoriesRelUrl = "categories/";
  constructor(private dataService: DataService) { }

  getCategories(): Observable<any>{ 
    return this.dataService.getFromApi(this.categoriesRelUrl);
  }

  getCategoryById(id: number){
    return this.dataService.getByIdFromApi(this.categoriesRelUrl, id);
  }

  createCategory(category: Category){
    category.id = 0;
    return this.dataService.postToApi(this.categoriesRelUrl, category);
  }

  updateCategory(category: Category){
    return this.dataService.putToApi(this.categoriesRelUrl, category.id, category);
  }

  deleteCategory(id:number){
    return this.dataService.deleteFromApi(this.categoriesRelUrl, id);
  }

  castJsonToCategory(jsonObject): Category{
    return <Category>jsonObject;
  }

  castJsonArrayToCategoryArray(jsonArray) : Category[]{
    return <Category[]> jsonArray;
  }

}
