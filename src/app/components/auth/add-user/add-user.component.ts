import { Component, OnInit } from '@angular/core';
import { Iauth } from 'src/app/model/auth';
import { AuthService } from 'src/app/server/auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user : Iauth = {
    name: "",
    email: "",
    password: 0
  }
  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.authService.addUser(this.user).subscribe(data => {
      alert('thêm thành công !!')
      this.router.navigateByUrl('admin/user')
    })
  }

}
