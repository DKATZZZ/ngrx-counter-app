import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.state';
import { setloadingspinner } from 'src/store/shared/shared.actions';
import { signupStart } from '../state/auth.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  signupForm!:FormGroup;

  constructor(private store:Store<AppState>){}

  ngOnInit():void{
   this.signupForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
   });
  }

  onSignupSubmit(){
    if(!this.signupForm.valid){
      return;
    }
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    this.store.dispatch(setloadingspinner({status:true}));
    this.store.dispatch(signupStart({email,password}));
  }

}
