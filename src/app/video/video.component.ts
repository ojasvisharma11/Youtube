import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  img;
  constructor() {
    this.updateCard();
   }

  ngOnInit(): void {
  }

  updateCard(){
    this.img = sessionStorage.getItem("current-item-video");
  }
}
