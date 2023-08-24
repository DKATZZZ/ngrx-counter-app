import { sharedState } from './shared.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const SHARED_STATE_NAME = 'shared';

const getSharedState = createFeatureSelector<sharedState>(SHARED_STATE_NAME);

export const getLoading = createSelector(getSharedState, (state) => {
  return state.showLoading;
});
