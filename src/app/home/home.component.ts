import { Component, OnInit } from '@angular/core';
import { Iblog } from '../model/blog';
import { Iwork } from '../model/work';
import { BlogService } from '../server/blog.service';
import { WorkService } from '../server/work.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs!: Iblog[]
  works!: Iwork[]
  constructor(
    private blogService: BlogService,
    private workService: WorkService
  ) {

   }

  ngOnInit(): void {
    this.getBlog();
    this.getWork();
  }
  getBlog(){
    this.blogService.listBlog().subscribe(data => {
      this.blogs = data
    })
  }
  getWork(){
    this.workService.listWork().subscribe(data => {
      this.works = data
    })
  }
}
