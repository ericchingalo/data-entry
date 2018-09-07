import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../environments/environment';

import { dataElementReducer, DataElementState } from './dataElement.reducer';
import { dataSetReducer, DataSetState } from './dataSet.reducer';
import { userReducer, UserState } from './user.reducer';
import {
  SelectedOrgUnitReducer,
  OrgUnitState
} from './selectedOrgUnit.reducer';

export class State {
  /**
   * user state
   */
  user: UserState;

  /**
   * dataElement state
   */
  dataElement: DataElementState;

  /**
   * dataSet state
   */
  dataSet: DataSetState;

  /**
   * selectedOrgUnit state
   */
  selectedOrgUnit: OrgUnitState;
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const reducers: ActionReducerMap<State> = {
  user: userReducer,
  dataElement: dataElementReducer,
  dataSet: dataSetReducer,
  selectedOrgUnit: SelectedOrgUnitReducer
};

export const getRootState = (state: State) => state;
