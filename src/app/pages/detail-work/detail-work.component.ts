import { Component, OnInit } from '@angular/core';
import { Iwork } from 'src/app/model/work';
import { WorkService } from 'src/app/server/work.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-work',
  templateUrl: './detail-work.component.html',
  styleUrls: ['./detail-work.component.css']
})
export class DetailWorkComponent implements OnInit {
  works!: Iwork
  constructor(
    private router : ActivatedRoute,
    private workService : WorkService,
  ) { 
    const id = this.router.snapshot.paramMap.get('id');
    console.log(id);
    
    this.workService.detailWork(id).subscribe((data) => {
      this.works =data
    })

  }

  ngOnInit(): void {
  }

}
