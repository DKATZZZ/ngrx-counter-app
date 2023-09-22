import { Injectable } from "@angular/core";
import { Actions,createEffect,ofType } from "@ngrx/effects";
import { PostsService } from "src/app/services/posts.service";
import { addPost, addpostsuccess, deletePost, deletePostsuccess, loadpost, loadpostsuccess, updatePost, updatepostsuccess } from "./posts.action";
import { map, mergeMap, switchMap } from "rxjs";



@Injectable()
export class PostEffects{
constructor(private action$:Actions,private postsService:PostsService){}

loadposts$ = createEffect(() => {
    return this.action$.pipe(
        ofType(loadpost),
        mergeMap((action)=>{
            return this.postsService.getPosts().pipe(
                map((posts)=>{
                    return loadpostsuccess({posts})
                    console.log(posts);
                })
            );
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
                    return updatepostsuccess({post:action.post});
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
}