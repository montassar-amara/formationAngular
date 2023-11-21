import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = ""
  data$ = new BehaviorSubject<string>('')
  constructor() { }
}
