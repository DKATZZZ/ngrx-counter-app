import { state } from "@angular/animations";
import { PostsState } from "./posts.state";
import {createFeatureSelector,createSelector} from '@ngrx/store';
const getpostsstate=createFeatureSelector<PostsState>('posts');

export const getposts = createSelector(getpostsstate,(state)=>{
    return state.posts;
})