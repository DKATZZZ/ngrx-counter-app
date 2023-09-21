import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Posts } from 'src/app/models/posts.model';
import { AppState } from 'src/store/app.state';
import { getposts } from '../state/posts.selector';
import { deletePost, loadpost } from '../state/posts.action';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
posts$:Observable<Posts[]>;

  constructor(private store:Store<AppState>){
   
  }
  ngOnInit(): void {
    this.posts$= this.store.select(getposts);
    this.store.dispatch(loadpost());
  }

  onDeletePost(id:string){
    if(confirm('Are you sure you want to delete')){
      this.store.dispatch(deletePost({id}));
    }
  }
}
