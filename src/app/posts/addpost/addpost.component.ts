import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Posts } from 'src/app/models/posts.model';
import { addPost } from '../state/posts.action';
import { AppState } from 'src/store/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss']
})
export class AddpostComponent implements OnInit{
myform!:FormGroup;

constructor(private fb:FormBuilder, private store:Store<AppState>){}
  ngOnInit(): void {
   this.myform = new FormGroup({
     title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
   })
  }

  get f(){
    return this.myform.controls;
  }

  onAdd(){
    
    if (!this.myform.valid) {
      return;
    }

    const post: Posts = {
      title: this.myform.value.title,
      description: this.myform.value.description,
    };

    this.store.dispatch(addPost({ post }));
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
