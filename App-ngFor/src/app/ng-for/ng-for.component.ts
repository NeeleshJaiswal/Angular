import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  courses: any[]=[
    {id:101, name:"TypeScript" },
    {id:201, name:"Angular"},
    {id:301, name:"Java"},
    {id:401, name:"Spring"},
    {id:501, name:"Hibernate"},
    {id:601, name:"AWS"}
]

}
