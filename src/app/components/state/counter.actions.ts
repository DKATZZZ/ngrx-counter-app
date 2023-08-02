/*create actions for comp*/

import { createAction,props } from "@ngrx/store";

export const increment = createAction('Increment');
export const decrement = createAction('Decrement');
export const reset = createAction('Reset');
export const customincrement=createAction('customIncrement',props<{count:number}>());
export const changechanneltitle=createAction('changechanneltitle');