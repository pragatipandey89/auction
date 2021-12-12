import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myreact:any= FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.myreact= new FormGroup({
      'userLoginDetails': new FormGroup({
      'fullName':new FormControl(null,Validators.required),
      'Password':new FormControl(null, Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'register':new FormControl(null, Validators.required),
      }),
      'State': new FormControl(null, Validators.required),
      'Address':new FormControl(null, Validators.required),
      'City':new FormControl(null, Validators.required),
      'Phone No.':new FormControl(null, Validators.required),
      'ZIP':new FormControl(null, Validators.required)
    });
  }
  onSubmit(){
    console.log(this.myreact);
  }
}
