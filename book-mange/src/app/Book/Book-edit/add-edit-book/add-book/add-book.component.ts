import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BooksService } from 'src/app/services/book.service';

import { UploadFileService } from 'src/app/services/upload-file.service';
import { IBookCreate } from '../../../../model/Book';

@Component({
  selector: 'book-add-book',
  templateUrl: './add-book.component.html',
})
export class AddBookComponent implements OnInit, OnDestroy {
  addForm!: FormGroup;
  bookAdd!: IBookCreate;
  fileName!: any;
  catId!: number;
  authId!: number;
  subscriptonCreate!: Subscription;
  constructor(
    private bookService: BooksService,
    private router: Router,
    private fb: FormBuilder,
    private uploadServices: UploadFileService
  ) {}

  ngOnInit(): void {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      language: ['', Validators.required],
      price: ['', Validators.required],
      pages: ['', Validators.required],
      fileSize: ['', Validators.required],
      description: ['', Validators.required],
      imagePath: [''],
      filePath: [''],
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0]; // get the uploaded file object
    this.uploadServices
      .uploadFile(file)
      .subscribe((res) => (this.fileName = res));
  }
  check() {
    console.log(this.addForm.get('categoryId')?.value);
  }
  onAdd() {
    this.bookAdd = this.addForm.value;
    this.bookAdd.imagePath = this.fileName;
    this.bookAdd.categoryId = this.catId;
    this.bookAdd.authorId = this.authId;
    console.table(this.bookAdd);
    this.subscriptonCreate = this.bookService
      .createBook(this.bookAdd)
      .subscribe({
        error(err) {
          alert(`Error :${err}`);
        },
        complete: () => alert('add Book Done'),
      });
  }
  //this method get id from sherd component category
  getCategoreyId(catIdFromChild: number) {
    this.catId = catIdFromChild;
    console.table(catIdFromChild);
  }
  //this method get id from sherd component Author2

  getAuthorId(authIdFromChild: number) {
    this.authId = authIdFromChild;
  }
  cate(){
console.log(this.catId);
  }
  auth(){
    console.log(this.authId);
  }
  onback() {
    this.router.navigate(['/mangebooks']);
  }
  ngOnDestroy(): void {
    // this.subscriptonCreate.unsubscribe();
  }
}
