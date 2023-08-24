import { setloadingspinner } from './shared.actions';
import { createReducer, on } from '@ngrx/store';
import { initialstate } from './shared.state';

const _sharedReducer = createReducer(
  initialstate,
  on(setloadingspinner, (state, action) => {
    return {
      state,
      showLoading: action.status,
    };
  })
);

export function SharedReducer(state, action) {
  return _sharedReducer(state, action);
}
