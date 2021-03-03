import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: any;
  like: boolean;
  dislike: boolean;
  likes: number;
  dislikes: number;
  constructor() {
   }

  ngOnInit(): void {
  }

  liked(){
    if(this.like == false){
      this.like = true;
      this.dislike = false;
    }
    else{
      this.like = false;
    }
  }

  disliked(){
    if(this.dislike == false){
      this.dislike = true;
      this.like = false;
    }
    else{
      this.dislike = false;
    }
  }


}
