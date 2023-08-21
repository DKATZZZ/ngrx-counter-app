import { createReducer } from "@ngrx/store";
import { initialState } from "../state/auth.state";


const _authreducer = createReducer(initialState);

export function AuthReducer(state,action){
    return _authreducer(state,action);
}