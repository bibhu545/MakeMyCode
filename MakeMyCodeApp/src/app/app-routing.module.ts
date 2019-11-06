import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminMasterComponent } from './_shared/admin.master.component';
import { PostListComponent } from './blog/post.list.component';
import { PostComponent } from './blog/post.component';
import { CreatePostComponent } from './blog/create.post.component';
import { LoginComponent } from './account/login.component';
import { SignupComponent } from './account/signup.component';


const routes: Routes = [
  {
    path: "",
    component: AdminMasterComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: "blog",
    component: AdminMasterComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: PostListComponent
      }
    ]
  },
  {
    path: "post/:number",
    component: AdminMasterComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: PostComponent
      }
    ]
  },
  {
    path: "create_post",
    component: AdminMasterComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: CreatePostComponent
      }
    ]
  },
  {
    path: "login",
    component: AdminMasterComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: LoginComponent
      }
    ]
  },
  {
    path: "signup",
    component: AdminMasterComponent,
    children: [
      {
        outlet: 'master',
        path: '',
        component: SignupComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
