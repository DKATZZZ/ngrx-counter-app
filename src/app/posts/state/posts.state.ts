import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Posts } from "../../models/posts.model";

export interface PostsState extends EntityState<Posts>{
    // posts:Posts[];
}

export const postAdapter = createEntityAdapter<Posts>();
export const initialstate = postAdapter.getInitialState();
// export const initialstate:PostsState = {
//     posts:null,

// }