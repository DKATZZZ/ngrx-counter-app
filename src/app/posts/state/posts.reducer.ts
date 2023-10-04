import {
  deletePost,
  updatePost,
  loadpostsuccess,
  addpostsuccess,
  updatepostsuccess,
  deletePostsuccess,
} from './posts.action';
import { createReducer, on } from '@ngrx/store';
import { initialstate, postAdapter } from './posts.state';

const _postsReducer = createReducer(
  initialstate,
  // on(addpostsuccess, (state, action) => {
  //   let post = { ...action.post };

  //   post.id = (state.posts.length + 1).toString();

  //   return {
  //     ...state,
  //     posts: [...state.posts, post],
  //   };
  // }),
  on(addpostsuccess, (state, action) => {
   return postAdapter.addOne(action.post,state);
  }),

  on(updatepostsuccess, (state, action) => {
    return postAdapter.updateOne(action.post,state);
  }),
  // on(updatepostsuccess, (state, action) => {
  //   const updatedPosts = state.posts.map((post) => {
  //     return action.post.id === post.id ? action.post : post;
  //   });

  //   return {
  //     ...state,
  //     posts: updatedPosts,
  //   };
  // }),
  // on(deletePostsuccess, (state, { id }) => {
  //   const updatedPosts = state.posts.filter((post) => {
  //     return post.id !== id;
  //   });

  //   return {
  //     ...state,
  //     posts: updatedPosts,
  //   };
  // }),
  on(deletePostsuccess, (state, { id }) => {
    return postAdapter.removeOne(id,state)
  }),
//   on(loadpostsuccess, (state, action) => {
//     return {
//       ...state,
//       posts: action.posts,
//     };
//   })
// );
on(loadpostsuccess, (state, action) => {
return postAdapter.setAll(action.posts,state);
})
);

export function postsReducer(state, action) {
  return _postsReducer(state, action);
}
