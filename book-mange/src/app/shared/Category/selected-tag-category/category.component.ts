import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategoryGets } from 'src/app/model/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'book-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  cateo$: ICategoryGets[] = [];
  getCate!: FormGroup;
  @Output() idCategory: EventEmitter<number> = new EventEmitter<number>();
  id!: number;
  constructor(private catServices: CategoryService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.catServices.getCatagories().subscribe((getCate) => {
      this.cateo$ = getCate;
    });
    this.getCate = this.fb.group({
      getCategory: ['' ],
    });
  }
  onGetAfterSelect() {
    this.id = this.getCate.get('getCategory')?.value;
    this.idCategory.emit(this.id);
  }
}
