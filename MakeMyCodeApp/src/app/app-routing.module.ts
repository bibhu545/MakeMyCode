import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminMasterComponent } from './_shared/admin.master.component';
import { PostListComponent } from './blog/post.list.component';
import { PostComponent } from './blog/post.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
