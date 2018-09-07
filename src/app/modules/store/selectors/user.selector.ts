import { createSelector } from '@ngrx/store';

import { getRootState, State } from '../reducers';
import { UserState } from '../reducers/user.reducer';
import { User } from '../../models/user.model'

export const getUserState = createSelector(
    getRootState, (state : State) => state.user
)

export const getUserDetails = createSelector(
    getUserState, (state : UserState) => state.user);

export const getAuthorities = createSelector(
    getUserDetails, (user : User) => user.authorities
);

export const getUserAccess = createSelector(
    getUserDetails, (user: User) => user.dataSets
);