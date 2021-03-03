import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  title: string;
  views: string;
  Likes: number;
  info;
  dislikes: number;
  like: string;
  dislike: string;
  download_status: boolean;
  share_status: boolean;
  constructor() {
    this.updateInfo();
   }

  ngOnInit(): void {
  }

  check(){
    if(this.title != JSON.parse(sessionStorage.getItem("current-item")).title){
      this.updateInfo();
    }
  }
  updateInfo(){
    this.title = JSON.parse(sessionStorage.getItem("current-item")).title;
    this.views = JSON.parse(sessionStorage.getItem("current-item")).views;
    this.Likes = JSON.parse(sessionStorage.getItem("current-item")).likes;
    this.dislikes = JSON.parse(sessionStorage.getItem("current-item")).dislikes;
    this.info = JSON.parse(sessionStorage.getItem("current-item")).artist;
    console.log(this.info)
    this.like = "grey";
    this.dislike = "grey";
    this.download_status = false;
    this,this.share_status = false;
  }

  liked(){
    if(this.like == "grey"){
      this.like = "rgb(7, 62, 232)";
      if(this.dislike != "grey"){
        this.dislikes -= 1;
      }
      this.dislike = "grey";
      this.Likes += 1;
    }
    else{
      this.like = "grey";
      this.Likes -= 1;
    }
  }

  disliked(){
    if(this.dislike == "grey"){
      this.dislike = "rgb(7, 62, 232)";
      if(this.like != "grey"){
        this.Likes -= 1;
      }
      this.like = "grey";
      this.dislikes += 1;
    }
    else{
      this.dislike = "grey";
      this.dislikes -= 1;
    }
  }
  download_video(){
    this.download_status = true;
    console.log(this.download_status);
  }
  share_video(){
    this.share_status = true;
    console.log(this.share_status);
  }
}