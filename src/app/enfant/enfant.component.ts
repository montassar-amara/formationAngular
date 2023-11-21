import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent implements OnInit {
  @Input() inputData!:string;
  @Output() eventChild = new EventEmitter()
  count = 0
  constructor(public dataService:DataService) { 
  }

  ngOnInit(): void {
  }

  handle(){
    this.count++;
    this.eventChild.emit(this.count)
  }
}
