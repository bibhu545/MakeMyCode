import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPostComponent } from './edit.post.component';
import { PostComponent } from './post.component';
import { PostListComponent } from './post.list.component';



@NgModule({
  declarations: [
    EditPostComponent,
    PostComponent,
    PostListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
