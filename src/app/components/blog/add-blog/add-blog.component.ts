import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Iblog } from 'src/app/model/blog';
import { BlogService } from 'src/app/server/blog.service';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  blogs : Iblog = {
    name: "",
    categoryId: 0,
    desc: ""
  }
  constructor(
    private blogService : BlogService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.blogService.addBlog(this.blogs).subscribe(data => {
      alert('Thêm thành công !!')
      this.router.navigateByUrl('admin/blog')
    })
  }

}
