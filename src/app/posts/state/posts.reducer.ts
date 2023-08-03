import { createReducer } from "@ngrx/store";
import { initialstate } from "./posts.state";

const _postsreducer = createReducer(initialstate)
export function postsReducer(state,action){
    return _postsreducer(state,action);
}