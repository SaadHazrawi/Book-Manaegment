import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IBook } from '../../../model/Book';
import { BooksService } from '../../../services/book.service';

@Component({
  selector: 'book-edit-book',
  templateUrl: './show-inAdmin.component.html',
  styleUrls: ['./show-inAdmin.component.css'],
})
export class ShowBookAdminComponent implements OnInit, OnDestroy {
  subscriptionGet!: Subscription;
  subscriptionDel!: Subscription;
  constructor(private bookService: BooksService, private router: Router) {}
  books: IBook[] = [];
  bookId!: number;
  ngOnInit(): void {
    this.subscriptionGet = this.bookService.getBooks().subscribe((request) => {
      this.books = request;
    });
  }
  editBook(book: IBook) {
    this.router.navigate(['/write-book', book.bookId]);
  }
  AddBook() {
    this.router.navigate(['/add-book']);
  }
  deleteBook(bookId: number) {
    this.bookId = bookId;
    this.subscriptionDel = this.bookService.deleteBook(bookId).subscribe({
      next: (del) => {
        console.table(bookId);
      },
      error: (err) => {
        alert('Something has been error');
      },
      complete: () => {
        alert(`Successes Delete the Item of Number:${bookId}`);
        window.location.reload();
      },
    });
  }
  ngOnDestroy(): void {
    this.subscriptionGet.unsubscribe();
    // this.subscriptionDel.unsubscribe();
  }
}
