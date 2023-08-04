import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Posts } from 'src/app/models/posts';
import { AppState } from 'src/store/app.state';
import { getposts } from '../state/posts.selector';

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
  }

}
