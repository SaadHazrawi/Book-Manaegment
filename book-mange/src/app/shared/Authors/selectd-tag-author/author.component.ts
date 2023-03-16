import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAuthor } from 'src/app/model/Authors';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'book-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {
  authors$: IAuthor[] = [];
  getAuth!: FormGroup;
  @Output() idAuthor: EventEmitter<number> = new EventEmitter<number>();
  id!: number;
  constructor(
    private authorServices: AuthorsService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.authorServices
      .getAuthors()
      .subscribe((auth) => (this.authors$ = auth));
    this.getAuth = this.fb.group({
      getAuthors: [''],
    });
  }
  onGetAutherAfterSelect()
  {
     this.id=this.getAuth.get('getAuthors')?.value;
    this.idAuthor.emit(this.id);
  }
}
