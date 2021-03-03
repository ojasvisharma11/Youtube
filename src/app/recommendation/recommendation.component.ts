import { Component, OnInit } from '@angular/core';
import * as video_data from 'db.json';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})

export class RecommendationComponent implements OnInit {
  recommendations: any[];
  constructor() {
    this.recommendations = [];
    let video = video_data.video;
    // console.log(rec);
    for(var i:number = 0;i<10;i++){
      this.recommendations.push({
        src: "assets/img_"+i+".jpg",
        trending: false,
        title: video[i].title,
        company: video[i].companyName,
        comments: video[i].comments,
        views: video[i].views,
        likes: video[i].likes,
        dislikes: video[i].dislikes,
        artist: video[i].artist
      })
    }
    // console.log(video[0].comments);
    this.updateCard(0);
    // let video = video_data.video;
    // console.log(video);
    // // console.log(rec);
    // this.recommendations = video;
    this.recommendations[0].trending = true;
    // console.log(this.recommendations);
   }

  ngOnInit(): void {
  }

  isTrue(str: string): boolean{
    return str == "true" ? true :  false;
  }

  updateCard(i: number){
    sessionStorage.setItem("current-item-video", this.recommendations[i].src);
    sessionStorage.setItem("current-item-comments", this.recommendations[i].comments);
    sessionStorage.setItem("current-item", JSON.stringify(this.recommendations[i]));
    console.log(i);
  }
}
