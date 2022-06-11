import { Component, OnInit } from '@angular/core';
import { Iwork } from 'src/app/model/work';
import { WorkService } from 'src/app/server/work.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  works!: Iwork[]
  constructor(
    private router : ActivatedRoute,
    private workService : WorkService,
  ) { 
  }

  ngOnInit(): void {
    this.getWork()
  }
  getWork(){
    this.workService.listWork().subscribe(data => {
      this.works = data;
    })
}

}
