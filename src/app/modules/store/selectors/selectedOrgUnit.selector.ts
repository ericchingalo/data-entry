import { createSelector } from '@ngrx/store';

import { getRootState , State } from '../reducers';
import { getOrgUnit } from '../reducers/selectedOrgUnit.reducer'

export const getOrgUnitState = createSelector(
    getRootState, (state : State) => state.selectedOrgUnit
)

export const getSelectedOrgUnit = createSelector(getOrgUnitState, getOrgUnit);
