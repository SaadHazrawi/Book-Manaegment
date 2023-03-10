import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBook } from './Book';

@Injectable({providedIn: 'root'})
export class BooksService {
    constructor(private httpClient: HttpClient) { }
    bookURL:string="api/book.json"
    getBooks():Observable<IBook[]>
    {
        return this.httpClient.get<IBook[]>(this.bookURL);
    }
}