import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iwork } from '../model/work';
@Injectable({
  providedIn: 'root'
})
export class WorkService {
  URL_API= ` http://localhost:3000/works`
  constructor(
    private http : HttpClient
  ) { }

  listWork(): Observable<Iwork[]>{
    return this.http.get<Iwork[]>(`${this.URL_API}`)
  }

  detailWork(id: any): Observable<Iwork>{
    return this.http.get<Iwork>(`${this.URL_API}/${id}`)
  }

  deleteWork(id: any): Observable<Iwork>{
    return this.http.delete<Iwork>(`${this.URL_API}/${id}`)
  }
  addWork(work: Iwork): Observable<Iwork>{
    return this.http.post<Iwork>(`${this.URL_API}`, work)
  }

  updateWork(work: Iwork): Observable<Iwork>{
    return this.http.put<Iwork>(`${this.URL_API}/${work.id}`, work)
  }


}
