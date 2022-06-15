import { Component, OnInit } from '@angular/core';
import { Iblog } from 'src/app/model/blog';
import { BlogService } from 'src/app/server/blog.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.css']
})
export class DetailBlogComponent implements OnInit {
  blogs! : Iblog
  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
  ) { 
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.blogService.detailBlog(id).subscribe(data => {
      this.blogs =data;
    })
  }

  ngOnInit(): void {
  }

}
