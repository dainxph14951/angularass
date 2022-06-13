import { Component, OnInit } from '@angular/core';
import { Iauth } from 'src/app/model/auth';
import { AuthService } from 'src/app/server/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user : Iauth = {
    name: "",
    email: "",
    password: 0
  }
  constructor(
    private authService : AuthService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if(id){
      this.authService.detail(id).subscribe(data => {
        this.user = data
      })
    }
  }
  onSubmit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if(id){
      this.authService.updateUser(this.user).subscribe(data => {
        alert('Update Thành công !!')
        this.router.navigateByUrl('admin/user')
      })
    }
  }
}
