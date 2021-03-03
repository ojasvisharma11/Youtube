import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() counter: number;
  @Output() inc = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.counter += 1;
    this.inc.emit();
  }
}
