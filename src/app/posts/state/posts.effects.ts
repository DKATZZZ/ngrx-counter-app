import { Injectable } from "@angular/core";
import { Actions,createEffect,ofType } from "@ngrx/effects";
import { PostsService } from "src/app/services/posts.service";
import { addPost, addpostsuccess, deletePost, deletePostsuccess, loadpost, loadpostsuccess, updatePost, updatepostsuccess } from "./posts.action";
import { filter, map, mergeMap, of, switchMap, withLatestFrom } from "rxjs";
import { ROUTER_NAVIGATION, RouterNavigatedAction, routerNavigatedAction } from "@ngrx/router-store";
import { Posts } from "src/app/models/posts.model";
import { Update } from "@ngrx/entity";
import { Store } from "@ngrx/store";
import { AppState } from "src/store/app.state";
import { getposts } from "./posts.selector";
import { dummyAction } from "src/app/auth/state/auth.action";



@Injectable()
export class PostEffects{
constructor(private action$:Actions,private postsService:PostsService,private store:Store<AppState>){}

loadposts$ = createEffect(() => {
    return this.action$.pipe(
        ofType(loadpost),
         withLatestFrom(this.store.select(getposts)),
        mergeMap(([action,posts])=>{
            if(!posts.length || posts.length === 1){
                return this.postsService.getPosts().pipe(
                    map((posts)=>{
                        return loadpostsuccess({posts})
                        console.log(posts);
                    })
                );
            }
          return of(dummyAction());
        })
    );
});

addposts$ = createEffect(()=>{
    return this.action$.pipe(
        ofType(addPost),
        mergeMap((action)=> {
            return this.postsService.addposts(action.post).pipe(
                map((data)=> {
                    const post = {...action.post,id:data.name};
                    return addpostsuccess({post});
                })
            );
        })
    );
});

updateposts$ = createEffect(()=>{
    return this.action$.pipe(
        ofType(updatePost),
        switchMap((action)=>{
            return this.postsService.updateposts(action.post).pipe(
                map((data) => {
                    const updatedpost:Update<Posts> = {
                        id:action.post.id,
                        changes:{
                            ...action.post,
                        },

                    };
                    return updatepostsuccess({post:updatedpost});
                })
            );
        })
    );
});

deleteposts$ = createEffect(()=> {
    return this.action$.pipe(
        ofType(deletePost),
        switchMap((action) => {
            return this.postsService.deletePost(action.id).pipe(
                map((data)=> {
                    return deletePostsuccess({id:action.id})
                })
            );
        })
    );
});

getsinglepost$ = createEffect(() => {
    return this.action$.pipe(
        ofType(ROUTER_NAVIGATION),
        filter((r:RouterNavigatedAction)=>{
            return r.payload.routerState.url.startsWith('/posts/details');
        }),
        map((r:RouterNavigatedAction)=> {
            return r.payload.routerState['params']['id'];

        }),
        withLatestFrom(this.store.select(getposts)),
        switchMap(([id,posts])=>{
            if(!posts.length){
                return this.postsService.getpostById(id).pipe(
                    map((post)=>{
                        const postData = [{...post,id}];
                        return loadpostsuccess({posts:postData});
                    })
                  );
            }
         return of(dummyAction());
        })
    );
});
}