import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/store/app.state';
import { getpostsById } from '../state/posts.selector';
import { Posts } from 'src/app/models/posts.model';
import { Subscription, map, switchMap } from 'rxjs';
import { addPost, updatePost } from '../state/posts.action';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.scss']
})
export class EditpostComponent {
  post: Posts;
  postForm: FormGroup;
  postSubscription: Subscription;
  constructor(
    private store: Store<AppState>,
    private router: Router,
   
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.store.select(getpostsById).subscribe((post)=>{
      if(post){
        this.post=post;
        this.postForm.patchValue({
          title:post.title,
          description:post.description
        });
      }
    });
  //   this.route.paramMap.subscribe((params) => {
  //     const id = params.get('id');
  //     this.postSubscription = this.store
  //       .select(getpostsById, { id })
  //       .subscribe((data) => {
  //         this.post = data;
  //         this.createForm();
  //       });
  //   });
   }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onSubmit() {
    if (!this.postForm.valid) {
      return;
    }

    const title = this.postForm.value.title;
    const description = this.postForm.value.description;

    const post: Posts = {
      id: this.post.id,
      title,
      description,
    };

    //dispatch the action
    this.store.dispatch(updatePost({ post }));
    this.router.navigate(['posts']);
  }

  ngOnDestroy() {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }
 
}
