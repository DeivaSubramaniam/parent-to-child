import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../app/child/child.component';
import { DataService } from './shared/data.service';


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
  constructor(private ds: DataService) {}
ngOnInit() {
   this.ds.currentMessage.subscribe(message => this.message = message);
}
  // updateFromChild($event) {
  //   this.count++;
  // }
}
