import { Component, OnInit } from '@angular/core';
import { Iauth } from 'src/app/model/auth';
import { AuthService } from 'src/app/server/auth.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  user! : Iauth[]
  constructor(
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    this.getUser()
  }
  getUser() {
    this.authService.listUser().subscribe(data=> {
      this.user = data
    })
  }
  onHanderRemove(id: any){
    const confim = window.confirm('bạn có muốn xóa không ? !')
    if(confim) {
      this.authService.deleteUser(id).subscribe(() => {
        this.user = this.user.filter(item => item.id !== id)
      })
      alert('xóa thành công !!')
    }

  }
}
