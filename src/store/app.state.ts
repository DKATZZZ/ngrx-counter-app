import { counterReducer } from "src/app/components/state/counter.reducer";
import { counterstate } from "src/app/components/state/counter.state";
import { postsReducer } from "src/app/posts/state/posts.reducer";
import { PostsState } from "src/app/posts/state/posts.state";


export interface AppState{
    counter:counterstate;
    posts:PostsState;
}

export const AppReducer={
    counter:counterReducer,
    posts:postsReducer
}