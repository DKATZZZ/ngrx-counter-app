import { RouterReducerState } from "@ngrx/router-store";
import { RouterStateUrl } from "./router";
import { createFeatureSelector, createSelector} from "@ngrx/store";

export const getRouterState = createFeatureSelector<
RouterReducerState<RouterStateUrl>
>('router');

export const getcurrentRoute = createSelector(getRouterState,(routered) => {
 return routered.state;
});