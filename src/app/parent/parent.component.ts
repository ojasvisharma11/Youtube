import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  counter: number;
  constructor() {
    this.counter = 1;
   }

  ngOnInit(): void {
  }
  increment(){
    this.counter += 1;
  }
}
