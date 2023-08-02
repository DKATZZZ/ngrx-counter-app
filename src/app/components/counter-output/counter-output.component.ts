import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { counterstate } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { getcounter } from '../state/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
//  counter:number;
   counter$:Observable<number>;
//  countersubscription:Subscription;
  constructor(private store:Store<{counter:counterstate}>){}

  ngOnInit(){
    // this.store.select('counter').subscribe((data)=>{
    //   this.counter$ = this.store.select('counter');
    //   //this.counter=data.counter;
    // });
    //this.counter$ = this.store.select('counter');

    //this.counter$=this.store.select('counter');
   
    // this.store.select('counter').subscribe((data) => {
    //   console.log("channel title is called");
    //   this.counter=data.counter;
      
    // })

    this.counter$ = this.store.select(getcounter);
    
  }
  // ngOnDestroy(): void {
  //   if(this.countersubscription){
  //     this.countersubscription.unsubscribe();
  //   }
  // }
}
