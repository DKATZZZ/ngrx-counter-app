import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.state';
import { loginstart } from '../state/auth.action';
import { setloadingspinner } from '../../../store/shared/shared.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginform:FormGroup;
constructor(private store:Store<AppState>){}
ngOnInit(): void {
  this.loginform = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })
}
get f(){
  return this.loginform.controls;
}
loginFormSubmit(){
 console.log(this.loginform);
 const email = this.loginform.value.email;
 const password = this.loginform.value.password;
 this.store.dispatch(setloadingspinner({status:true}));
 this.store.dispatch(loginstart({email,password}));
 this.loginform.reset();
}
}
//test@test.com pwd:123456