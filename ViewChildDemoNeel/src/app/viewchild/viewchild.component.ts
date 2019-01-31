import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {

  public name: string="Neelesh";


  /**
   * reverseName
   */
  public reverseName(nm:string):string  {
    return 'Neelesh Jaiswal';
  }

  constructor() { }

  ngOnInit() {
  }

}
