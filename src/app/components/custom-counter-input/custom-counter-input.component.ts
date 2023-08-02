import { Component, OnInit } from '@angular/core';
import { counterstate } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { changechanneltitle, customincrement } from '../state/counter.actions';
import { Observable } from 'rxjs';
import { getchanneltitle } from '../state/counter.selector';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit{
value:number;
// channeldata:string;
channelData$:Observable<string>;
constructor(private store:Store<{counter:counterstate}>){}

ngOnInit(): void {
  // this.store.select('counter').subscribe(data => {
  //   console.log("observable called for");
  //   this.channeldata=data.channeltitle;
  // });
  this.channelData$ = this.store.select(getchanneltitle);
}
onAdd(){
  console.log(this.value);
  this.store.dispatch(customincrement({count:+this.value}));
}

onchangechannel(){
  this.store.dispatch(changechanneltitle());

}
}
