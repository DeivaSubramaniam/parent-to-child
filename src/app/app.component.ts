import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../app/child/child.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ParentApp-works!!!';
  myFabFood = 'Biriyani';
  Myname = 'Deivamani';
  message: string;
  constructor() {}
ngOnInit() {
}
  // updateFromChild($event) {
  //   this.count++;
  // }
}
