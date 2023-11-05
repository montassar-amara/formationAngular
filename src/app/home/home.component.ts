import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users = this.userService.users;

  constructor(private userService:BackendService) { }

  ngOnInit(): void {
    this.printMsg()
  }

  printMsg(){
    this.userService.fetchData().subscribe()
  }

  toUppercase(text:string):string{
    console.log('appel')
    return text.toUpperCase()
  }
}
