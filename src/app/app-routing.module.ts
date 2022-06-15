import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddUserComponent } from './components/auth/add-user/add-user.component';
import { EditUserComponent } from './components/auth/edit-user/edit-user.component';
import { ListUserComponent } from './components/auth/list-user/list-user.component';
import { AddBlogComponent } from './components/blog/add-blog/add-blog.component';
import { EditBlogComponent } from './components/blog/edit-blog/edit-blog.component';
import { ListBlogComponent } from './components/blog/list-blog/list-blog.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { ListCategoryComponent } from './components/category/list-category/list-category.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { AddProfileComponent } from './components/profile/add-profile/add-profile.component';
import { ListProfileComponent } from './components/profile/list-profile/list-profile.component';
import { AddWorkComponent } from './components/work/add-work/add-work.component';
import { EditWorkComponent } from './components/work/edit-work/edit-work.component';
import { ListWorkComponent } from './components/work/list-work/list-work.component';
import { HomeComponent } from './home/home.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { LayoutWebComponent } from './layout/layout-web/layout-web.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DetailBlogComponent } from './pages/detail-blog/detail-blog.component';
import { DetailWorkComponent } from './pages/detail-work/detail-work.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { WorkComponent } from './pages/work/work.component';

const routes: Routes = [
  {path: '',component: LayoutWebComponent, children: [
    { path:"", component: HomeComponent},
    { path:"blog", component: BlogComponent},
    { path:"work", component: WorkComponent},
    { path:"work/detailwork/:id", component: DetailWorkComponent},
    { path:"blog/detailblog/:id", component: DetailBlogComponent},
    { path:"signup", component: SignupComponent, },
    { path:"signin", component: SigninComponent},
  ]},
  //  canActivate: [AuthGuard]
    {path:'admin', component: LayoutAdminComponent,canActivate: [AuthGuard], children: [
      { path:"dashboard", component: DashboardComponent},
      { path:"blog", component: ListBlogComponent},
      { path:"blog/add", component: AddBlogComponent},
      { path:"blog/:id/edit", component: EditBlogComponent},
   
      { path:"work", component: ListWorkComponent},
      { path:"work/add", component: AddWorkComponent},
      { path:"work/:id/edit", component: EditWorkComponent},
   
      { path:"category", component: ListCategoryComponent},
      { path:"category/add", component: AddCategoryComponent},
      { path:"category/:id/edit", component: EditCategoryComponent},
   
      { path:"user", component: ListUserComponent},
      { path:"user/add", component: AddUserComponent},
      { path:"user/:id/edit", component: EditUserComponent},
   
      { path:"profile", component: ListProfileComponent},
      { path:"profile/add", component: AddProfileComponent},
      { path:"profile/:id/edit", component: AddProfileComponent},
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
