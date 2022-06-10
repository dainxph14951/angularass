import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Iblog } from '../model/blog';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  URL_API = `http://localhost:3000/blogs`
  constructor(
    private http: HttpClient
  ) { }
  listBlog() : Observable<Iblog[]>{
    return this.http.get<Iblog[]>(`${this.URL_API}`);
  }
  detailBlog(id: any) : Observable<Iblog>{
    return this.http.get<Iblog>(`${this.URL_API}/${id}`);
  }
  deleteBlog(id: any) : Observable<Iblog>{
    return this.http.delete<Iblog>(`${this.URL_API}/${id}`);
  }
  addBlog(blog: Iblog) : Observable<Iblog>{
    return this.http.post<Iblog>(`${this.URL_API}`, blog);
  }
  updateBlog(blog: Iblog) : Observable<Iblog>{
    return this.http.put<Iblog>(`${this.URL_API}/${blog.id}`, blog);
  }

}
