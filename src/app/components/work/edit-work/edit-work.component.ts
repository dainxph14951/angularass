import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Iwork } from 'src/app/model/work';
import { WorkService } from 'src/app/server/work.service';

@Component({
  selector: 'app-edit-work',
  templateUrl: './edit-work.component.html',
  styleUrls: ['./edit-work.component.css']
})
export class EditWorkComponent implements OnInit {
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
    const id = this.activatedRoute.snapshot.paramMap.get('id')

    if(id) {
      this.workService.detailWork(id).subscribe(data => this.works = data);
    }
  }
  onSubmit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.workService.updateWork(this.works).subscribe(data => console.log(data))
      alert('update thành công !!')
      this.router.navigateByUrl('admin/category')
    }

  }
}
