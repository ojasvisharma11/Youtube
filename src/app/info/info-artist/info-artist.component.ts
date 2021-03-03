import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-artist',
  templateUrl: './info-artist.component.html',
  styleUrls: ['./info-artist.component.css']
})
export class InfoArtistComponent implements OnInit {

  @Input() infoArtist: any;
  @Input() read_more: boolean;
  @Input() subscribed: boolean;
  constructor() {
    this.read_more = true;
   }

  ngOnInit(): void {
    console.log(this.read_more, this.subscribed);
  }

  show_details(){
    this.read_more = false;
  }
  hide_details(){
    this.read_more = true;
  }
}
