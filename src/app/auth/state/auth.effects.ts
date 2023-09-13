import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth.service";
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { loginstart,login_success, signupSuccess, signupStart } from "./auth.action";
import { User } from "src/app/models/user.model";
import { Store } from "@ngrx/store";
import { AppState } from "src/store/app.state";
import { setErrorMessage, setloadingspinner } from "src/store/shared/shared.actions";
import { of } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects{
    constructor(private actions$: Actions, private authService: AuthService, private store:Store<AppState>,private router:Router) {}

   //login auth action
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginstart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data:any) => {
            this.store.dispatch(setloadingspinner({status:false}));
            this.store.dispatch(setErrorMessage({message:''}));
            const user = this.authService.formatUser(data);
            return login_success({user});
          }),
          catchError((errResp) => {
            this.store.dispatch(setloadingspinner({ status: false }));
            const errorMessage = this.authService.getErrorMessage(
              errResp.error.error.message
            );
            return of(setErrorMessage({ message: errorMessage }));
          })
        );
      })
    );
  });

  //redirect to login page
  loginRedirect$ = createEffect(() => {
   return this.actions$.pipe(
     ofType(...[login_success,signupSuccess]),
     tap((action)=>{
       this.store.dispatch(setErrorMessage({message:''}));
       this.router.navigate(['/'])
     })
   );
  },
  {dispatch:false}
  );

  //signup component data
  signup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signupStart),
      exhaustMap((action)=>{
        return this.authService.signup(action.email,action.password).pipe(
          map((data)=>{
            this.store.dispatch(setloadingspinner({status:false}));
            const user = this.authService.formatUser(data);
            return signupSuccess({ user });
          }),
          catchError((errorResp)=>{
            this.store.dispatch(setloadingspinner({status:false}));
            const errorMessage = this.authService.getErrorMessage(
              errorResp.error.error.message
            );
            return of(setErrorMessage({message: errorMessage}));
          })
        );
      })
    );
  });
}