import { counterReducer } from "src/app/components/counter-component/state/counter.reducer";
import { counterstate } from "src/app/components/counter-component/state/counter.state";
import { postsReducer } from "src/app/posts/state/posts.reducer";
import { PostsState } from "src/app/posts/state/posts.state";
import { SHARED_STATE_NAME } from "./shared/shared.selector";
import { sharedState } from "./shared/shared.state";
import { SharedReducer } from "./shared/shared.reducer";
import { AuthState } from "src/app/auth/state/auth.state";
import { AUTH_STATE_NAME } from "src/app/auth/state/auth.selector";
import { AuthReducer } from "src/app/auth/state/auth.reducer";
import { RouterReducerState, routerReducer, } from "@ngrx/router-store";



export interface AppState{
    [SHARED_STATE_NAME] : sharedState;
    [AUTH_STATE_NAME] : AuthState;
    router:RouterReducerState;
    // counter:counterstate;
    // posts:PostsState;
}

export const AppReducer={
        [SHARED_STATE_NAME]: SharedReducer,
        [AUTH_STATE_NAME] :AuthReducer,
        router:routerReducer
    
      
    // counter:counterReducer,
    // posts:postsReducer
}