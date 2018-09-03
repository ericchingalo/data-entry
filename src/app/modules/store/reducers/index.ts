import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../environments/environment';

import { dataElementReducer, DataElementState } from './dataElement.reducer';
import { dataSetReducer, DataSetState } from './dataSet.reducer'
import { userReducer, UserState } from './user.action';

export class State{
    /**
     * user state
     */
    user : UserState;

    /**
     * dataElement state
     */
    dataElement : DataElementState;

    /**
     * dataSet state
     */
    dataSet : DataSetState;
}



export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];


export const reducers: ActionReducerMap<State> = {
    user : userReducer,
    dataElement : dataElementReducer,
    dataSet : dataSetReducer
}

export const getRootState = (state: State) => state;