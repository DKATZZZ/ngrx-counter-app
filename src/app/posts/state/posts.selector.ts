import { state } from "@angular/animations";
import { PostsState } from "./posts.state";
import {createFeatureSelector,createSelector} from '@ngrx/store';
import { Posts } from "src/app/models/posts.model";

const getpostsstate=createFeatureSelector<PostsState>('posts');


export const getposts = createSelector(getpostsstate,(state)=>{
    return state.posts;
});

export const getpostsById = (postId: string) => createSelector(getpostsstate,(state)=>{
    return state.posts.find((post) => post.id === postId);
});