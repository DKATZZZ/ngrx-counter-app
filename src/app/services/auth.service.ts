import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Authresponsedata } from '../models/authresponsedata';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
timeoutInterval:any;
  constructor(private http:HttpClient) { }

  login(email:string,password:string):Observable<Authresponsedata>{
    return this.http.post<Authresponsedata>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`,
    {email,password,returnSecureToken: true})
  }

  signup(email:string,password:string) : Observable<Authresponsedata>{
    return this.http.post<Authresponsedata>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIRBASE_API_KEY}`,
      {email,password,returnSecureToken:true}
    )
  }

  formatUser(data:Authresponsedata){
    const expirationdate = new Date(new Date().getTime() + + data.expiresIn * 1000);
    const user = new User(data.email,data.idToken,data.localId,expirationdate);
    return user;
  }

  getErrorMessage(message:string){
    switch(message){
      case 'EMAIL_NOT_FOUND':
        return 'Email not Found';
        case 'INVALID_PASSWORD':
          return 'Invalid Password';
        default:
          return 'Unknown error Occured . Please Try again';

    }
  }

  setUserInLocalStorage(user:User){
    localStorage.setItem('userdata',JSON.stringify(user));
    this.runTimeoutInterval(user);
  }

  runTimeoutInterval(user:User){
    const todaysDate = new Date().getTime();
    const expirationdate = user.expireDate.getTime();
    const timeInterval = expirationdate - todaysDate;
    this.timeoutInterval = setTimeout(() => {
      //logout functionality or get the refresh token
    }, timeInterval);

  }

  getUserFromLocalStorage(){
    const userdatastring = localStorage.getItem('userdata');
    if(userdatastring){
      const userdata = JSON.parse(userdatastring);
      const expirationDate = new Date(userdata.expirationDate);
      const user = new User(
        userdata.email,
        userdata.token,
        userdata.localId,
        expirationDate
      );
      this.runTimeoutInterval(user);
      return user;
    }
    return null;
  }
}
