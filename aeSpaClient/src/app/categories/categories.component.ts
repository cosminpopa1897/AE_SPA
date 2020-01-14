import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../domain/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input() categories: Category[];
  @Output() notifyCategorySelected = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.categories);
  }

  emitNotifyCategorySelected(id){
    this.notifyCategorySelected.emit({id});
  }



}
