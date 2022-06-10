import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Iwork } from 'src/app/model/work';
import { WorkService } from 'src/app/server/work.service';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  works : Iwork = {
    name: "",
    img: "",
    category: "",
    desc: ""
  }
  constructor(
    private workService : WorkService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.workService.addWork(this.works).subscribe(data => {
      alert('Thêm thành công !!')
      this.router.navigateByUrl('admin/work')
    })
  }

}
