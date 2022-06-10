import { Component, OnInit } from '@angular/core';
import { Iwork } from 'src/app/model/work';
import { WorkService } from 'src/app/server/work.service';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css']
})
export class ListBlogComponent implements OnInit {
    works! : Iwork[]
  constructor(
    private workService: WorkService
  ) { }

  ngOnInit(): void {
    this.getBlog();
  }
  getBlog(){
      this.workService.listWork().subscribe(data => {
        this.works = data;
      })
  }
  onHanderRemove(id : any){
    const confirm = window.confirm('Bạn có muốn xóa không ?');
    if(confirm){
      this.workService.deleteWork(id).subscribe(() => {

        this.works = this.works.filter(item => item.id !== id);
        alert('Xóa thành công !!')
      })
    }
  }
}