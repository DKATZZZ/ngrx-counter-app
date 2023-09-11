import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";
import { state } from "@angular/animations";

export const AUTH_STATE_NAME = 'auth';
export const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);
export const isAuthenticated = createSelector(getAuthState, (state) => {
    return state.user ? true:false;
});

