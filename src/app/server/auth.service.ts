import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iauth } from '../model/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL_API = `http://localhost:3000/users`
  constructor(
    private http: HttpClient
  ) { }
    listUser(): Observable<Iauth[]>{
      return this.http.get<Iauth[]>(`${this.URL_API}`)
    }
    addUser(user: Iauth): Observable<Iauth>{
      return this.http.post<Iauth>(`${this.URL_API}`, user)
    }
    updateUser(user: Iauth): Observable<Iauth>{
      return this.http.put<Iauth>(`${this.URL_API}/${user.id}`, user)
    }
    deleteUser(id: any): Observable<Iauth>{
      return this.http.delete<Iauth>(`${this.URL_API}/${id}`)
    }
    detail(id: any): Observable<Iauth>{
      return this.http.get<Iauth>(`${this.URL_API}/${id}`)
    }


    signin(user : Iauth): Observable<Iauth> {
      return this.http.post<Iauth>(`http://localhost:3000/signin`, user)
    }
}
