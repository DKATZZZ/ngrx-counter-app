import { Injectable } from "@angular/core";
import { Actions,createEffect,ofType } from "@ngrx/effects";
import { PostsService } from "src/app/services/posts.service";
import { loadpost, loadpostsuccess } from "./posts.action";
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
}