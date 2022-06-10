import { Component, OnInit } from '@angular/core';
import { Iblog } from 'src/app/model/blog';
import { BlogService } from 'src/app/server/blog.service';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css']
})
export class ListBlogComponent implements OnInit {
    blogs! : Iblog[]
  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.getBlog();
  }
  getBlog(){
      this.blogService.listBlog().subscribe(data => {
        this.blogs = data;
      })
  }
  onHanderRemove(id : any){
    const confirm = window.confirm('Bạn có muốn xóa không ?');
    if(confirm){
      this.blogService.deleteBlog(id).subscribe(() => {

        this.blogs = this.blogs.filter(item => item.id !== id);
        alert('Xóa thành công !!')
      })
    }
  }
}
