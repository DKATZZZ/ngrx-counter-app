import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, exhaustMap, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.state';
import { gettoken } from '../auth/state/auth.selector';

@Injectable()
export class AuthtokenInterceptor implements HttpInterceptor {

  constructor(private store:Store<AppState>) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(gettoken).pipe(
      take(1),
      exhaustMap((token)=> {
      if(!token){
        return next.handle(request);
      }
      let modifyreq = request.clone({
          params:request.params.append('auth',token),
      });
      return next.handle(modifyreq);
    }));
    
  }
}
