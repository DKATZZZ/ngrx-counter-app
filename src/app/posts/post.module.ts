import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostlistComponent } from './postlist/postlist.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddpostComponent } from './addpost/addpost.component';
import { EditpostComponent } from './editpost/editpost.component';
import {  StoreModule } from '@ngrx/store';
import { postsReducer } from './state/posts.reducer';


const routes:Routes=[
  {
    path:'', component:PostlistComponent,
    children:[
    {path:'add',component:AddpostComponent},
    {path:'edit/:id',component:EditpostComponent}
    ]
  }
]
@NgModule({
  declarations: [
    PostlistComponent,
    AddpostComponent,
    EditpostComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('posts',postsReducer)
  ]
})
export class PostModule { }
