import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { RouterModule } from '@angular/router';
import { BookDetailComponent } from './Book-detailes/bookdeatile.component';
import { EditBookComponent } from './Book-edit/edit-book.component';
import { WriteEditBookComponent } from './Book-edit/write-edit-book/write-edit-book.component';
import { SharedModule } from '../shared/shared.module';
import { AddBookComponent } from './Book-edit/write-edit-book/add-book.component';

@NgModule({
  declarations: [
    BookComponent,
    BookDetailComponent,
    EditBookComponent,
    WriteEditBookComponent,
    AddBookComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'books', component: BookComponent },
      { path: 'mangebooks', component: EditBookComponent },
      {
        path: 'books/:id',
        component: BookDetailComponent,
      },
      {
        path: 'write-book/:id',
        component: WriteEditBookComponent,
      },
      {
        path: 'add-book',
        component: AddBookComponent,
      },
    ]),
  ],
})
export class BookModule {}
