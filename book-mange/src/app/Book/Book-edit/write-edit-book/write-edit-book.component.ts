import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { Book, IBook } from '../../Book';
import { BooksService } from '../../book.service';

@Component({
  selector: 'book-write-edit-book',
  templateUrl: './write-edit-book.component.html',
  styleUrls: ['./write-edit-book.component.css'],
})
export class WriteEditBookComponent implements OnInit {
  idBook: number | string | null;
  book!: IBook;
  constructor(
    private route: ActivatedRoute,
    private bookservice: BooksService,
    private router: Router
  ) {
    this.idBook = this.route.snapshot.paramMap.get('id');
    this.idBook = Number(this.idBook);
  }
  goBackClick() {
    this.router.navigate(['/books']);
  }
  ngOnInit(): void {
    this.bookservice
      .getBooks()
      .pipe(
        map((books) => books.find((i) => i.bookId === this.idBook) as IBook),
        tap((data) => console.log(data))
      )
      .subscribe((books$) => (this.book = books$));
  }

  UpdateBook(book: IBook) {
    this.book = book;
    console.log(this.book);
  }
  AddBook(book: IBook) {}
}
