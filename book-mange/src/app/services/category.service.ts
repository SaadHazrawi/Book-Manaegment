import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoryGets } from '../model/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categoirsUrl = 'api/category.json';
  constructor(private httpClient: HttpClient) {}
  getCatagories(): Observable<ICategoryGets[]> {
    return this.httpClient.get<ICategoryGets[]>(
      'https://localhost:7266/api/Categories'
    );
  }
}
