import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iauth } from 'src/app/model/auth';
import { AuthService } from 'src/app/server/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: Iauth = {
    name: "",
    email: "",
    password: 0
   }

  constructor(
    private authService : AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.authService.signin(this.user).subscribe(data => {
      localStorage.setItem("user", JSON.stringify(this.user));
      alert(' ĐĂng nhập thành công')
      this.router.navigateByUrl('/');
    })
}


}
