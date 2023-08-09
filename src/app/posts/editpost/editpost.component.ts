import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/store/app.state';
import { getpostsById } from '../state/posts.selector';
import { Posts } from 'src/app/models/posts.model';
import { map, switchMap } from 'rxjs';
import { addPost } from '../state/posts.action';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.scss']
})
export class EditpostComponent {
  post:Posts;
  constructor(private route:ActivatedRoute, private store:Store<AppState>){}

  OnInit(){
    this.route.paramMap.subscribe(params => {
      const postId = params.get('id');
       this.store.select(getpostsById(postId)).subscribe((data)=>{
        this.post = data;
        console.log(this.post);
        this.store.dispatch(addPost({ post }));

       });
    });
  }
}
