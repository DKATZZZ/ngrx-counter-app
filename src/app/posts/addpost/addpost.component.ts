import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss']
})
export class AddpostComponent implements OnInit{
myform!:FormGroup;

constructor(private fb:FormBuilder){}
  ngOnInit(): void {
   this.myform = this.fb.group({
    title:new FormControl('',
    [Validators.required,
      Validators.minLength(6)
    
    ]),
    description:new FormControl(null,
      [Validators.required,
      Validators.minLength(10)])
   });
  }

  get f(){
    return this.myform.controls;
  }

  onAdd(){
    console.log(this.myform);
  }
  getErrorMessage(field: string): string {
    let message:string;
    const formField = this.myform.get('description');

    if (formField.errors) {
      if (formField.errors['required']) {
        message = 'Description is required';
      }  else if (formField.errors['minlength']) {
        message = 'Description must be at least 10 characters long';
      }
      // other error types...
    }

    return message;
  }
}
