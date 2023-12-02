import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-input-output2',
  templateUrl: './input-output2.component.html',
  styleUrls: ['./input-output2.component.scss']
})
export class InputOutput2Component implements OnInit {
  data = ""
  constructor(public service: DataService) { }

  ngOnInit(): void {
  }
  sendDataToService(){
    this.service.dataFromChild2 = this.data
  }

}
