import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  data = "Hello from parent"
  fromChild:any = 0
  fromChild1 = ""
  fromChild2 = ""
  constructor() { }

  ngOnInit(): void {
  }

}
