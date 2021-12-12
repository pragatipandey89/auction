import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  alert:boolean=false;
  submitForm:any= FormGroup; 
  constructor() { }

  ngOnInit(): void {
  this.submitForm= new FormGroup({
    'Item Name':new FormControl(null,Validators.required),
    'Item Category':new FormControl(null,Validators.required),
    'Item Condition':new FormControl(null, Validators.required),
    'Brand':new FormControl(null,Validators.required),
    'possesion': new FormControl(null, Validators.required),
    'startingBid':new FormControl(null, Validators.required),
    'startingTime':new FormControl(null, Validators.required),
    'endingTime':new FormControl(null, Validators.required),
    'productDescription':new FormControl(null, Validators.required),
  });
  }
  onSubmit(){
    console.log(this.submitForm);
    this.alert=true;
  }

  closeAlert()
  {
    this.alert=false;
    this.submitForm.reset({})
  }
}
