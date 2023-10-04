import { Update } from '@ngrx/entity';
import { Posts } from './../../models/posts.model';
import { createAction, props } from '@ngrx/store';

export const ADD_POST_ACTION = '[posts page] add post';
export const UPDATE_POST_ACTION = '[posts page] update post';
export const UPDATE_POST_SUCCESS = '[posts page] update posts success';
export const DELETE_POST_ACTION = '[posts page] delete post';
export const DELETE_POST_SUCCESS = '[posts page] delete post success';
export const LOAD_POSTS = '[posts page] load posts';
export const LOAD_POSTS_SUCCESS = '[posts page] load posts success';
export const ADD_POST_SUCCESS = '[posts page] add posts success';

export const addPost = createAction(ADD_POST_ACTION, props<{ post: Posts }>());
export const addpostsuccess = createAction(ADD_POST_SUCCESS,props<{post:Posts}>())

export const updatePost = createAction(UPDATE_POST_ACTION, props<{ post: Posts }>());
export const updatepostsuccess = createAction(
    UPDATE_POST_SUCCESS,
    props<{post:Update<Posts>}>());

export const deletePost = createAction(DELETE_POST_ACTION,props<{id:string}>());
export const deletePostsuccess = createAction(DELETE_POST_SUCCESS,
    props<{id:string}>());

export const loadpost = createAction(LOAD_POSTS);

export const loadpostsuccess = createAction(LOAD_POSTS_SUCCESS,props<{posts:Posts[]}>());