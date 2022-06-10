import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Iblog } from 'src/app/model/blog';
import { BlogService } from 'src/app/server/blog.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
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
    const id = this.activatedRoute.snapshot.paramMap.get('id')

    if(id) {
      this.blogService.detailBlog(id).subscribe(data => this.blogs = data);
    }
  }
  onSubmit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.blogService.updateBlog(this.blogs).subscribe(data => console.log(data))
      alert('update thành công !!')
      this.router.navigateByUrl('admin/category')
    }

  }
}
