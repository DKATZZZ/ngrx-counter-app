import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth.service";
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { loginstart,login_success } from "./auth.action";
import { User } from "src/app/models/user";
import { Store } from "@ngrx/store";
import { AppState } from "src/store/app.state";
import { setErrorMessage, setloadingspinner } from "src/store/shared/shared.actions";
import { of } from "rxjs";

@Injectable()
export class AuthEffects{
    constructor(private actions$: Actions, private authService: AuthService, private store:Store<AppState>) {}

   
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
}