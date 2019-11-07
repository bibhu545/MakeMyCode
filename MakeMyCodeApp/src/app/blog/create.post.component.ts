import { Component, OnInit } from '@angular/core';
import { CKEditorModule } from 'ckeditor4-angular';
import { CreatePostModel } from '../_utils/models';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from '../_utils/utils';
// import EditorJS from '@editorjs/editorjs';
// import Header from '@editorjs/header';


@Component({
  selector: 'app-create.post',
  templateUrl: './create.post.component.html',
  styleUrls: ['./create.post.component.css']
})
export class CreatePostComponent implements OnInit {

  _newPost: CreatePostModel = new CreatePostModel();

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {
  }

  savePost(){
    console.log(this._newPost);
    this._http.post(API_ENDPOINTS.createPost, JSON.stringify(this._newPost)).subscribe(responseData => {
      console.log("Hello");
      console.log(responseData);
    });
  }

}
