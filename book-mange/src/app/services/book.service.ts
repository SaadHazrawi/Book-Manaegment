import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBook, IBookCreate } from '../model/Book';

@Injectable({ providedIn: 'root' })
export class BooksService {
  constructor(private httpClient: HttpClient) {}

  bookApiURL: string =
    'https://localhost:7266/api/Books?PageNumber=1&pageSize=50';
  getBooks(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(this.bookApiURL);
  }
  getBook(bookId: number): Observable<IBook> {
    return this.httpClient.get<IBook>(
      `https://localhost:7266/api/Books/${bookId}`
    );
  }

  createBook(book: IBookCreate): Observable<any> {
    return this.httpClient.post<any>('https://localhost:7266/api/Books', book);
  }
  deleteBook(bookId: number): Observable<any> {
    return this.httpClient.delete(`https://localhost:7266/api/Books/${bookId}`);
  }
  updateBook(book:IBookCreate,bookId:number):Observable<any>{
    return this.httpClient.put<any>(`https://localhost:7266/api/Books/${bookId}`,book);
  }
}
