import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book, IBook } from '../../Book';

@Component({
  selector: 'book-add-book',
  templateUrl: './add-book.component.html',
})
export class AddBookComponent implements OnInit {
  book: Book = new Book();
  constructor(private router: Router) {}
  ngOnInit(): void {}

  AddBook(book: Book) {
    this.book = book;
    this.router.navigate(['/mangebooks'])
  }
}
