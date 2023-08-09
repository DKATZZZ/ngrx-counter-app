import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { HomeComponent } from './home/home.component';
import { PostlistComponent } from './posts/postlist/postlist.component';
import { AddpostComponent } from './posts/addpost/addpost.component';
import { EditpostComponent } from './posts/editpost/editpost.component';

const routes:Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'counter', component:CounterComponent
  },
  {
    path:'posts', component:PostlistComponent,
    children:[{path:'add',component:AddpostComponent},
    {path:'edit/:id',component:EditpostComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
