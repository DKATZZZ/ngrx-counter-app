import { counterReducer } from "src/app/components/counter-component/state/counter.reducer";
import { counterstate } from "src/app/components/counter-component/state/counter.state";
import { postsReducer } from "src/app/posts/state/posts.reducer";
import { PostsState } from "src/app/posts/state/posts.state";
import { SHARED_STATE_NAME } from "./shared/shared.selector";
import { sharedState } from "./shared/shared.state";
import { SharedReducer } from "./shared/shared.reducer";



export interface AppState{
    [SHARED_STATE_NAME] : sharedState;
    // counter:counterstate;
    // posts:PostsState;
}

export const AppReducer={
        [SHARED_STATE_NAME]: SharedReducer,
    
      
    // counter:counterReducer,
    // posts:postsReducer
}