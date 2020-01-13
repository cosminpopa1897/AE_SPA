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

  castJsonToCategory(jsonObject): Category{
    return <Category>jsonObject;
  }

  castJsonArrayToCategoryArray(jsonArray) : Category[]{
    return <Category[]> jsonArray;
  }

}
