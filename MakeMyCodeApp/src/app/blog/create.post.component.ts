import { Component, OnInit } from '@angular/core';
import { CKEditorModule } from 'ckeditor4-angular';
import { CreatePostModel, UserLoginModel } from '../_utils/models';
import { API_ENDPOINTS } from '../_utils/utils';
import { HttpService } from '../_services/http.service';


@Component({
  selector: 'app-create.post',
  templateUrl: './create.post.component.html',
  styleUrls: ['./create.post.component.css']
})
export class CreatePostComponent implements OnInit {

  _newPost: CreatePostModel = new CreatePostModel();

  constructor(private _http: HttpService) {
  }

  ngOnInit() {
  }

  savePost() {
    this._http.postData(API_ENDPOINTS.createPost, this._newPost).subscribe(
      responseData => {
        console.log(responseData);
      });
  }

}
