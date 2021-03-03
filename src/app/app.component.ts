import { Component } from '@angular/core';
import * as editJsonFile from 'edit-json-file';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube';
  print(event: Event){
    console.log(event.target);
  }
}
