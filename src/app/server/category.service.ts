import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icategory } from '../model/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  URL_API = `http://localhost:3000/categorys`
  constructor(
    private http: HttpClient
  ) { }
  
  listCate(): Observable<Icategory[]>{
    return this.http.get<Icategory[]>(`${this.URL_API}`)
  }

  detailCate(id: any): Observable<Icategory>{
    return this.http.get<Icategory>(`${this.URL_API}/${id}`)
  }
  deleteCate(id: any): Observable<Icategory>{
    return this.http.delete<Icategory>(`${this.URL_API}/${id}`)
  }

  addCate(category: Icategory): Observable<Icategory>{
    return this.http.post<Icategory>(`${this.URL_API}`, category)
  }

  updateCate(category: Icategory): Observable<Icategory>{
    return this.http.put<Icategory>(`${this.URL_API}/${category.id}`, category)
  }
  
  
  
  
}
