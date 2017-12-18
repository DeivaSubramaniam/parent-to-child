import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { SiblingComponent } from './child/sibling/sibling.component';
import { DataService } from './shared/data.service';



@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SiblingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
