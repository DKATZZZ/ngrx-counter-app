import { addPost } from './posts.action';
import { createReducer, on } from '@ngrx/store';
import { initialstate } from './posts.state';

const _postsReducer = createReducer(
  initialstate,
  on(addPost, (state, action) => {
    let post = { ...action.post };

    post.id = (state.posts.length + 1).toString();

    return {
      ...state,
      posts: [...state.posts, post],
    };
  })
);

export function postsReducer(state, action) {
  return _postsReducer(state, action);
}
