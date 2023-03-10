import { Component, OnInit } from '@angular/core';
import { IBook } from './Book';
import { BooksService } from './book.service';

@Component({
  selector: 'book-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  constructor(private bookService: BooksService) {}
  books: IBook[] = [];
  ngOnInit(): void {
    this.bookService.getBooks().subscribe((request) => {
      this.books = request;
    });
  }
}
