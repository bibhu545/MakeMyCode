import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPostComponent } from './edit.post.component';
import { PostComponent } from './post.component';
import { PostListComponent } from './post.list.component';
import { CreatePostComponent } from './create.post.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule } from '@angular/forms';
import { ReviewPostComponent } from './review.post.component';

@NgModule({
  declarations: [
    EditPostComponent,
    PostComponent,
    PostListComponent,
    CreatePostComponent,
    ReviewPostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule 
  ]
})
export class BlogModule { }
