import { createReducer, on } from "@ngrx/store";
import { initialState } from "../state/auth.state";
import { autologout, login_success, signupSuccess } from "./auth.action";
import { state } from "@angular/animations";


const _authreducer = createReducer(
    initialState, 
    on(login_success,(state,action) => {
        console.log(action);
        return{
        ...state,
        user:action.user,
        }
    }),
    on(signupSuccess,(state,action)=>{
        console.log(action);
        return{
            ...state,
            user:action.user,
        };
    }),
    on(autologout,(state)=> {
        return {
            ...state,
            user:null
        };
    }),
    );

export function AuthReducer(state,action){
    return _authreducer(state,action);
}