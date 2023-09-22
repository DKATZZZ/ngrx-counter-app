import { Posts } from './../models/posts.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Posts[]> {
    return this.http
      .get<Posts[]>(`https://vue-completecourse.firebaseio.com/posts.json`)
      .pipe(
        map((data) => {
          const posts: Posts[] = [];
          for (let key in data) {
            posts.push({ ...data[key], id: key });
          }
          return posts;
        })
      );
  }

  addposts(post:Posts):Observable<{name:string}>{
    return this.http.post<{name:string}>(`https://vue-completecourse.firebaseio.com/posts.json`,
    post
    );
  }
  updateposts(post:Posts){
    const updatepost = {
      [post.id] : {title:post.title,description:post.description},

    };
    return this.http.patch(`https://vue-completecourse.firebaseio.com/posts.json`,updatepost);
  }
  
  deletePost(id:string){
    return this.http.delete(`https://vue-completecourse.firebaseio.com/posts/${id}.json`,
    );
  }
}
