import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard';



const routes:Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'counter',
      loadChildren: () => 
        import('./components/counter-component/counter.module').then((m) => m.CounterModule),
  },
  {
    path:'posts',
      loadChildren: () =>
         import('./posts/post.module').then((m)=>m.PostModule),
         canActivate:[AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
