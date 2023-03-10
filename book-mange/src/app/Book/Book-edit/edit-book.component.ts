import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book, IBook } from '../Book';
import { BooksService } from '../book.service';

@Component({
  selector: 'book-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  constructor(private bookService: BooksService,private router:Router) {}
  books: IBook[] = [];
  bookToEdit: Book=new Book();
  bookId!:number;
  ngOnInit(): void {
    this.bookService.getBooks().subscribe((request) => {
      this.books = request;
    });
  }
  editBook(book: IBook) {
    this.bookToEdit = book;
    console.log(this.bookToEdit);
    ['/books',book.bookId]
    this.router.navigate(['/write-book',this.bookToEdit.bookId])
  }
  AddBook(){
   
    this.router.navigate(['/add-book'])
  }
  delteBook(bookId:number){
    this.bookId=bookId;
    console.log(this.bookId);
  }
}
