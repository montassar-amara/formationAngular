import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-enfant2',
  templateUrl: './enfant2.component.html',
  styleUrls: ['./enfant2.component.scss']
})
export class Enfant2Component implements OnInit {
  enfant2Data = ""
  constructor( private dataService: DataService) { }

  ngOnInit(): void {
  }

    sendData(){
      this.dataService.data = this.enfant2Data
    }
}
