import { state } from "@angular/animations";
import { PostsState } from "./posts.state";
import {createFeatureSelector,createSelector} from '@ngrx/store';
import { Posts } from "src/app/models/posts.model";
import { getcurrentRoute } from "src/store/router/router.selector";
import { RouterStateUrl } from "src/store/router/router";


export const POST_STATE_NAME = 'posts';
const getpostsstate=createFeatureSelector<PostsState>(POST_STATE_NAME);


export const getposts = createSelector(getpostsstate,(state)=>{
    return state.posts;
});

export const getpostsById = createSelector(
    getposts,
    getcurrentRoute,
    (posts,route:RouterStateUrl)=>{
    return posts ? posts.find((post) => post.id === route.params['id']) : null;
});