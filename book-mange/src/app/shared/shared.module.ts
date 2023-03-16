import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './Category/selected-tag-category/category.component';
import { RouterModule } from '@angular/router';
import { AuthorComponent } from './Authors/selectd-tag-author/author.component';

@NgModule({
  declarations: [
    CategoryComponent,
    AuthorComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule,RouterModule.forChild([
    {path:'category',component:CategoryComponent},
    {path:'authos',component:AuthorComponent},
  ])],
  exports: [ReactiveFormsModule, FormsModule,CategoryComponent,AuthorComponent],
})
export class SharedModule {}
