import { Component, ViewChild } from '@angular/core';
import{ ViewchildComponent } from './viewchild/viewchild.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(ViewchildComponent)
  view:ViewchildComponent;

name1 : string= "Saurabh";
/**
 * m1
 */
public m1() {
  console.log("m1");
  this.name1=this.view.reverseName("N");
}


  title = 'ViewChildDemoNeel';
}
