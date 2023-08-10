import { addPost, updatePost } from './posts.action';
import { createReducer, on } from '@ngrx/store';
import { initialstate } from './posts.state';
import { state } from '@angular/animations';

const _postsReducer = createReducer(
  initialstate,
  on(addPost, (state, action) => {
    let post = { ...action.post };

    post.id = (state.posts.length + 1).toString();

    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePost,(state,action) => {
    const updatedposts = state.posts.map(post => {
      return action.post.id ===post.id ? action.post:post;
    });
    return {
      ...state,
      posts:updatedposts,
    };
  })
);

export function postsReducer(state, action) {
  return _postsReducer(state, action);
}
