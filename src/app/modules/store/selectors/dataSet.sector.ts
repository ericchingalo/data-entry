import { createSelector } from '@ngrx/store';

import { getRootState, State } from '../reducers';
import { getDataSets } from '../reducers/dataSet.reducer';

export const getDataSetState = createSelector(
    getRootState, (state : State) => state.dataSet
)

export const getAllDatSets =  createSelector(getDataSetState, getDataSets);