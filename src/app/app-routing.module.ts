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
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { AddProfileComponent } from './components/profile/add-profile/add-profile.component';
import { ListProfileComponent } from './components/profile/list-profile/list-profile.component';
import { AddWorkComponent } from './components/work/add-work/add-work.component';
import { EditWorkComponent } from './components/work/edit-work/edit-work.component';
import { ListWorkComponent } from './components/work/list-work/list-work.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DetailWorkComponent } from './pages/detail-work/detail-work.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { WorkComponent } from './pages/work/work.component';

const routes: Routes = [
   { path:"", component: HomeComponent, pathMatch: "full"},
   { path:"blog", component: BlogComponent,canActivate: [AuthGuard]},
   { path:"work", component: WorkComponent},
   { path:"work/detailwork/:id", component: DetailWorkComponent},
   { path:"signup", component: SignupComponent, },
   { path:"signin", component: SigninComponent},
  //  canActivate: [AuthGuard]

  { path:"admin/dashboard", component: HeaderAdminComponent,canActivate: [AuthGuard]},
   { path:"admin/blog", component: ListBlogComponent,canActivate: [AuthGuard]},
   { path:"admin/blog/add", component: AddBlogComponent,canActivate: [AuthGuard]},
   { path:"admin/blog/:id/edit", component: EditBlogComponent,canActivate: [AuthGuard]},

   { path:"admin/work", component: ListWorkComponent,canActivate: [AuthGuard]},
   { path:"admin/work/add", component: AddWorkComponent,canActivate: [AuthGuard]},
   { path:"admin/work/:id/edit", component: EditWorkComponent,canActivate: [AuthGuard]},

   { path:"admin/category", component: ListCategoryComponent,canActivate: [AuthGuard]},
   { path:"admin/category/add", component: AddCategoryComponent,canActivate: [AuthGuard]},
   { path:"admin/category/:id/edit", component: EditCategoryComponent,canActivate: [AuthGuard]},

   { path:"admin/user", component: ListUserComponent,canActivate: [AuthGuard]},
   { path:"admin/user/add", component: AddUserComponent,canActivate: [AuthGuard]},
   { path:"admin/user/:id/edit", component: EditUserComponent,canActivate: [AuthGuard]},

   { path:"admin/profile", component: ListProfileComponent,canActivate: [AuthGuard]},
   { path:"admin/profile/add", component: AddProfileComponent,canActivate: [AuthGuard]},
   { path:"admin/profile/:id/edit", component: AddProfileComponent,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
