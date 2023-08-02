import { Component } from '@angular/core';
import { counterstate } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { customincrement } from '../state/counter.actions';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent {
value:number;

constructor(private store:Store<{counter:counterstate}>){}
onAdd(){
  console.log(this.value);
  this.store.dispatch(customincrement({count:+this.value}));
}
}
