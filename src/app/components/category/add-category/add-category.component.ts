import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/model/category';
import { CategoryService } from 'src/app/server/category.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categorys: Icategory = {
    name: ""
  }
  constructor(
    private categoryService : CategoryService,
    private router : Router,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.categoryService.addCate(this.categorys).subscribe(data => {
      alert('Thêm thành công !!')
      this.router.navigateByUrl('admin/category')
    })
  }
}
