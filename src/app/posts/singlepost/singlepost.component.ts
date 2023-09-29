import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Posts } from 'src/app/models/posts.model';
import { AppState } from 'src/store/app.state';
import { getpostsById } from '../state/posts.selector';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.scss']
})
export class SinglepostComponent implements OnInit {
post:Observable<Posts>;
constructor(private store:Store<AppState>){}

ngOnInit():void{
  this.post = this.store.select(getpostsById);
}
}
