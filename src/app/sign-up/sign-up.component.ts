import { toRelativeImport } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUPComponent implements OnInit {

  myreact:any= FormGroup;

  constructor(private router:Router,private routes:ActivatedRoute) { }

  ngOnInit() {
    this.myreact= new FormGroup({
      'fullName':new FormControl(null,Validators.required),
      'Password':new FormControl(null, Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'register':new FormControl(null, Validators.required),
      'State': new FormControl(null, Validators.required),
      'Address':new FormControl(null, Validators.required),
      'City':new FormControl(null, Validators.required),
      'Phone No.':new FormControl(null, Validators.required),
      'ZIP':new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    console.log
    this.router.navigate(['/signIN'],{relativeTo:this.routes})
  }
}
