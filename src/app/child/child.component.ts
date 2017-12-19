import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() mFood: string;
@Input() mName: string;
  constructor() { }
//  myName: string;
  ngOnInit() {
  }
  // Display(num) {
  //   this.count1 = num;
  //   for ( let i = 0; i < this.count1; i++) {
  //     this.myName = this.MName;
  //   }
  // }
}
