import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post.list',
  templateUrl: './post.list.component.html',
  styleUrls: ['./post.list.component.css']
})
export class PostListComponent implements OnInit {

  _posts: String[] = [];
  _postImagePath:String = "/assets/images/2.jpg";

  constructor() { 
    this.createPosts();
  }

  ngOnInit() {
  }

  createPosts(){
    var text: String = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever the 1500s...";

    for (let index = 0; index < 6; index++) {
      this._posts.push(text);
    }
  }

}
