import { createSelector } from '@ngrx/store';

import { getRootState, State } from '../reducers';
import { getUser } from '../reducers/user.action';

export const getUserState = createSelector(
    getRootState, (state : State) => state.user
)

export const getUserDetails = createSelector(getUserState, getUser);