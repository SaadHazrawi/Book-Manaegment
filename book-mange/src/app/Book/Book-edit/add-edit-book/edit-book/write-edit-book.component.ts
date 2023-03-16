import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription, tap } from 'rxjs';
import { BooksService } from 'src/app/services/book.service';
import { IBook, IBookCreate } from '../../../../model/Book';
 
@Component({
  selector: 'book-write-edit-book',
  templateUrl: './write-edit-book.component.html',
  styleUrls: ['./write-edit-book.component.css'],
})
export class WriteEditBookComponent implements OnInit, OnDestroy {
  editForm!: FormGroup;
  book!: IBook;
  suscription!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private bookservice: BooksService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  idBook = Number(this.route.snapshot.paramMap.get('id'));
  ngOnInit(): void {
    this.editForm = this.fb.group({
      authorId: [1, Validators.required],
      categoryId: [1, Validators.required],
      name: ['', Validators.required],
      language: ['', Validators.required],
      price: ['', Validators.required],
      pages: ['', Validators.required],
      fileSize: ['', Validators.required],
      description: ['', Validators.required],
      imagePath: [''],
      filePath: [''],
    });
    this.bookservice
      .getBooks()
      .pipe(
        map((books) => books.find((i) => i.bookId === this.idBook) as IBook),
        tap((data) => console.log(data))
      )
      .subscribe((books$) => {
        this.book = books$;
        this.editForm.patchValue({
          name: this.book.name,
          price: this.book.price,
          pages: this.book.pages,
          language: this.book.language,
          fileSize: this.book.fileSize,
          description: this.book.description,
        });
      });
  }
  onEdit() {
    let updateBook: IBookCreate = this.editForm.value;
    this.suscription = this.bookservice
      .updateBook(updateBook, this.idBook)
      .subscribe(()=>{
       alert("Success UpDate Book ");
       this.router.navigate(['/mangebooks']);
      });
    //   {
    //     error(err) {
    //       alert(`error has been created: ${err}`);
    //     },
    //     complete() {
    //       alert('success Update Book');
    
    //     }
    //   }
  }
  goBackClick() {
    this.router.navigate(['/mangebooks']);
  }
  ngOnDestroy(): void {
    // this.suscription.unsubscribe();
  }
}
