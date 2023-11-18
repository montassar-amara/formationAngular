import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users = this.userService.users;
  msg = "hello"
  myForm = this.fb.group({
    myInput: new FormControl('hello',Validators.minLength(3)),
    myInput2: new FormControl('hello',Validators.minLength(3))
  });
  constructor(private userService:BackendService, private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.printMsg()
  }

  printMsg(ev:any){
    console.log(ev)
  }

  toUppercase(text:string):string{
    console.log('appel')
    return text.toUpperCase()
  }

  submitForm(){
    console.log(this.myForm.value)
  }
}
