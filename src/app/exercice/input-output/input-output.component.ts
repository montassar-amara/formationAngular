import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {
  data = ""
  @Output() dataOut = new EventEmitter()
  @Input()  dataFromChild = ""

  @Input() channel = ""
  constructor(public service: DataService) { }

  ngOnInit(): void {
  }
  sendData(){
    this.dataOut.emit(this.data)
  }
  
  sendDataToService(){
    this.service.dataFromChild1 = this.data
  }
  
}
