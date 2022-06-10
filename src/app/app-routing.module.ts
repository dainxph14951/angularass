import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { WorkComponent } from './pages/work/work.component';

const routes: Routes = [
   { path:"", component: HomeComponent, pathMatch: "full"},
   { path:"blog", component: BlogComponent},
   { path:"work", component: WorkComponent},
   { path:"signup", component: SignupComponent},
   { path:"signin", component: SigninComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
