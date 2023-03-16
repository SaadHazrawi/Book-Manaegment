import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBook } from '../../model/Book';
import { BooksService } from '../../services/book.service';

@Component({
  selector: 'book-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit,OnDestroy {
  suscriptionGets!: Subscription;
  constructor(private bookService: BooksService) {}
 
  books: IBook[] = [];
  ngOnInit(): void {
  this.suscriptionGets=this.bookService.getBooks().subscribe((request) => {
      this.books = request;
    });
  }
   ngOnDestroy(): void {
    // this.suscriptionGets.unsubscribe();
  }
}
