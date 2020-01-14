import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/domain/category';

@Component({
  selector: 'app-categories-admin',
  templateUrl: './categories-admin.component.html',
  styleUrls: ['./categories-admin.component.css']
})
export class CategoriesAdminComponent implements OnInit {

  @Input()  categoryList: Category[] = [];
  @Output() notifyCategoryDelete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  emitNotifyDelete(id:number){
    this.notifyCategoryDelete.emit({id});
  }

}
