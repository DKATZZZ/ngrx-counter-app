import { Injectable } from "@angular/core";
import { Actions,createEffect,ofType } from "@ngrx/effects";
import { PostsService } from "src/app/services/posts.service";
import { addPost, addpostsuccess, loadpost, loadpostsuccess } from "./posts.action";
import { map, mergeMap } from "rxjs";



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
}