import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { IBook } from '../Book';
import { BooksService } from '../book.service';

@Component({
  selector: 'book-bookdeatile',
  templateUrl: './bookdeatile.component.html',
  styleUrls: ['./bookdeatile.component.css'],
})
export class BookDetailComponent implements OnInit {
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
  goPriceClick(bookId:number)
  {
    console.log(bookId);
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
}
