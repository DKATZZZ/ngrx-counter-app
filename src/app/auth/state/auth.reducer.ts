import { createReducer, on } from "@ngrx/store";
import { initialState } from "../state/auth.state";
import { login_success, signupSuccess } from "./auth.action";


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
    
    );

export function AuthReducer(state,action){
    return _authreducer(state,action);
}