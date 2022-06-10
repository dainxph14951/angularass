import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/model/category';
import { CategoryService } from 'src/app/server/category.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  categorys: Icategory = {
    name: ""
  }
  constructor(
    private categoryService : CategoryService,
    private router : Router,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    
    if(id) {
      this.categoryService.detailCate(id).subscribe(data => this.categorys = data);
    }
  }
  onSubmit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.categoryService.updateCate(this.categorys).subscribe(data => console.log(data))
      alert('update thành công !!')
      this.router.navigateByUrl('admin/category')
    }

  }
}
