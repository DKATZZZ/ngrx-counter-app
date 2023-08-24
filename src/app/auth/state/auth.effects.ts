import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth.service";
import { exhaustMap, map } from 'rxjs/operators';
import { loginstart,login_success } from "./auth.action";
import { User } from "src/app/models/user";
import { Store } from "@ngrx/store";
import { AppState } from "src/store/app.state";
import { setloadingspinner } from "src/store/shared/shared.actions";

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
            const user = this.authService.formatUser(data);
            return login_success({user});
          })
        );
      })
    );
  });
}