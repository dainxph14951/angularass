import { Component, OnInit } from '@angular/core';
import { Iblog } from 'src/app/model/blog';
import { BlogService } from 'src/app/server/blog.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs!: Iblog[]
  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.getBlog();
  }
  getBlog(){
    this.blogService.listBlog().subscribe(data => {
      this.blogs= data
    })
  }

}
