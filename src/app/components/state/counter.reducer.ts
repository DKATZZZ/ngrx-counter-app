/*create reducer for state and actions*/
import { createReducer, on } from "@ngrx/store";
import {initialState} from './counter.state';
import { changechanneltitle, customincrement, decrement, increment, reset } from "./counter.actions";
import { state } from "@angular/animations";


const _counterReducer=createReducer(initialState,
    on(increment,(state)=>{
           return {
                    ...state,
                    counter:state.counter + 1,

                    };
    }),
      on(decrement,(state)=>{
        return {
                ...state,
                counter:state.counter - 1,
               }
      }),
  
      on(reset,(state)=>{
          return {
                  ...state,
                  counter:0,    
        }
      }),
      on(customincrement,(state , action)=>{
        console.log(action);
         return {
          ...state,
          counter:state.counter + action.count,
         }
      }),
      on(changechanneltitle,(state) =>{
        return {
          ...state,
          channeltitle:"Developer World"
        }
      })

    );
export function counterReducer(state:any,action:any){
    return _counterReducer(state,action);
}