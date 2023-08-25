import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Authresponsedata } from '../models/authresponsedata';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(email:string,password:string){
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`,
    {email,password,returnSecureToken: true})
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
}
