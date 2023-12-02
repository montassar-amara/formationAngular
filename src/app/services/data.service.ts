import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = ""
  dataFromChild1 = ""
  dataFromChild2 = ""
  data$ = new BehaviorSubject<string>('')
  constructor() { }
}
