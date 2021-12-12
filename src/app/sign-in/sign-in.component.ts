import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignINComponent implements OnInit {

  myreact:any= FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.myreact= new FormGroup({
      'Password':new FormControl(null, Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
    })
  }

  onSubmit(){
    console.log(this.myreact);
  }
}
