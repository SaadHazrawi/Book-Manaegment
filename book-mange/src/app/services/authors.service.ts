import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthor } from '../model/Authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private httpClient:HttpClient) { }
  private AurhUrl="https://localhost:7266/api/Authors";
  getAuthors():Observable<IAuthor[]>{
    return this.httpClient.get<IAuthor[]>("https://localhost:7266/api/Authors")
  }
}
