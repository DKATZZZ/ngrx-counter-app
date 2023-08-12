import { createFeatureSelector,createFeature, createSelector } from "@ngrx/store";
import { counterstate } from "./counter.state";

const getcounterstate = createFeatureSelector<counterstate>('counter');

export const getcounter = createSelector(getcounterstate,(state)=>{
    return state.counter;
});

export const getchanneltitle = createSelector(getcounterstate,(state)=>{
    return state.channeltitle;
});