import { Component, OnInit } from '@angular/core';
import { CKEditorModule } from 'ckeditor4-angular';
import { CreatePostModel } from '../_utils/models';
// import EditorJS from '@editorjs/editorjs';
// import Header from '@editorjs/header';


@Component({
  selector: 'app-create.post',
  templateUrl: './create.post.component.html',
  styleUrls: ['./create.post.component.css']
})
export class CreatePostComponent implements OnInit {

  _newPost: CreatePostModel = new CreatePostModel();

  constructor() {
  }

  ngOnInit() {
  }

  savePost(){
    console.log(this._newPost);
  }

}
