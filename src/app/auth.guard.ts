import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './server/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router :Router,
    private a : ActivatedRoute
    ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const id = JSON.parse(localStorage.getItem("user") as any).user.id
      console.log(id)
      if(id == "1"){
        return true;  
      }else{
        return false;
      }
 

  }
  
}
