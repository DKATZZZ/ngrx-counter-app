import { state } from "@angular/animations";
import { PostsState, postAdapter } from "./posts.state";
import {createFeatureSelector,createSelector} from '@ngrx/store';
import { Posts } from "src/app/models/posts.model";
import { getcurrentRoute } from "src/store/router/router.selector";
import { RouterStateUrl } from "src/store/router/router";


export const POST_STATE_NAME = 'posts';
const getpostsstate=createFeatureSelector<PostsState>(POST_STATE_NAME);
export const postsselector = postAdapter.getSelectors();

export const getposts = createSelector(getpostsstate,postsselector.selectAll);
export const getpostsentities = createSelector(getpostsstate,postsselector.selectEntities);

// export const getposts = createSelector(getpostsstate,(state)=>{
//     return state.posts;
// });

export const getpostsById = createSelector(
    getpostsentities,
    getcurrentRoute,
    (posts,route:RouterStateUrl)=>{
    return posts ? posts[route.params['id']] : null;
});