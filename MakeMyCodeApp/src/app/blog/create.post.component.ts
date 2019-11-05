import { Component, OnInit } from '@angular/core';
import { CKEditorModule } from 'ckeditor4-angular';
// import EditorJS from '@editorjs/editorjs';
// import Header from '@editorjs/header';


@Component({
  selector: 'app-create.post',
  templateUrl: './create.post.component.html',
  styleUrls: ['./create.post.component.css']
})
export class CreatePostComponent implements OnInit {
  public model = {
    editorData: '<p>Hello, world!</p>'
};
  _editorData: string = "";

  constructor() {

  }

  ngOnInit() {
    // const editor = new EditorJS({
    //   holderId: 'postBody',
    //   tools: { 
    //     header: Header
    //   }, 
    // })
  }

  savePost(){
    console.log(this.model.editorData);
  }

}
