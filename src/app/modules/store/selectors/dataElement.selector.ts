import { createSelector } from '@ngrx/store';

import { getRootState, State } from '../reducers';
import { getDataElements } from '../reducers/dataElement.reducer'

export const getDataElementState =  createSelector(
    getRootState, (state : State) => state.dataElement 
)
export const getAllDataElement = createSelector(getDataElementState, getDataElements);