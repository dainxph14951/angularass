import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/model/category';
import { CategoryService } from 'src/app/server/category.service';
@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  categorys! : Icategory[] 
  constructor(
    private categoryService : CategoryService
  ) { }

  ngOnInit(): void {
    this.getCate();
  }

  getCate() {
    this.categoryService.listCate().subscribe(data => {
      this.categorys = data;
    })
  }
  onHanderRemove(id: any){
      const confirm = window.confirm('Bạn có muốn xóa không ?');
      if(confirm){
        this.categoryService.deleteCate(id).subscribe(() => {

          this.categorys = this.categorys.filter(item => item.id !== id);
          alert('Xóa thành công !!')
        })
      }

  }
}
