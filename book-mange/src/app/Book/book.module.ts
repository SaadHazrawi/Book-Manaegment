import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book-list-for-user/book.component';
import { RouterModule } from '@angular/router';
import { BookDetailComponent } from './Book-detailes/bookdeatile.component';
 
import { SharedModule } from '../shared/shared.module';
import { ShowBookAdminComponent } from './Book-edit/show-book-detaile/show-inAdmin.component';
import { WriteEditBookComponent } from './Book-edit/add-edit-book/edit-book/write-edit-book.component';
import { AddBookComponent } from './Book-edit/add-edit-book/add-book/add-book.component';

@NgModule({
  declarations: [
    BookComponent,
    BookDetailComponent,
    ShowBookAdminComponent,
    WriteEditBookComponent,
    AddBookComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'books', component: BookComponent },
      { path: 'mangebooks', component: ShowBookAdminComponent },
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
