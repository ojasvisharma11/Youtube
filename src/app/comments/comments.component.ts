import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit {
  comments: JSON[];
  title: string;
  // Likes: number;
  // dislikes: number;
  // like: string;
  // dislike: string;
  data: any;
  count: number;
  img: string;
  constructor() {
    this.updateInfo();
  }
  ngOnInit(): void {
    this.data = ['apple', 'ball'];
    this.count = 0;
    this.img = "assets/avatar.jpg";
  }
  check(){
    if(this.title != JSON.parse(sessionStorage.getItem("current-item")).title){
      this.updateInfo();
    }
  }
  updateInfo(){
    this.comments = [];
    var comments_all = JSON.parse(sessionStorage.getItem("current-item")).comments;
    var no_of_comments:number = 2;
    for(var i: number = 0;i<no_of_comments;i++){
      this.comments.push(comments_all[i]);
    }
    this.title = JSON.parse(sessionStorage.getItem("current-item")).title;
    console.log(this.comments[0])
  }
}
