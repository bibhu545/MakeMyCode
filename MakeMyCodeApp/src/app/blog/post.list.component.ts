import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post.list',
  templateUrl: './post.list.component.html',
  styleUrls: ['./post.list.component.css']
})
export class PostListComponent implements OnInit {

  _posts: String[] = [];
  _categories: String[] = [];
  _postImagePath:String = "/assets/images/2.jpg";

  constructor() { 
    this.createPosts();
  }

  ngOnInit() {
  }

  createPosts(){
    var text: String = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...";

    this._categories.push("Category1");
    this._categories.push("Category2");
    this._categories.push("Category3");
    this._categories.push("Category4");
    this._categories.push("Category5");
    this._categories.push("Category6");
    this._categories.push("Category7");

    for (let index = 0; index < 10; index++) {
      this._posts.push(text);
    }
  }

}
