import { DataSetActions, DataSetsActionTypes } from '../actions';

import { ErrorMessage } from '../../models/error-message.module';
import { DataSet } from '../../models/dataSet.model';

export interface DataSetState {
    loading : boolean,
    loaded : boolean,
    error : ErrorMessage,
    dataSets : DataSet[]
}

export const initialState : DataSetState = {
    loading : false,
    loaded : false,
    error : null,
    dataSets : [ ]
}

export function dataSetReducer(
    state = initialState,
    action : DataSetActions
){
    switch(action.type){
        case DataSetsActionTypes.LoadDataSets:
        return {
            ...state,
            loading : true,
            loaded : false,
            error : null,
            dataSets : state.dataSets
        };

        case DataSetsActionTypes.LoadDataSetsSuccess: 
        return {
            ...state,
            loading : false,
            loaded : true,
            errror : null,
            dataSets : action.payload
        };

        case DataSetsActionTypes.LoadDataSetsFail: 
        return {
            ...state,
            loading : false,
            loaded : false,
            error : action.error,
            dataSets : state.dataSets
        };

        default: return state;
    }
}

export const getDataSets = (state : DataSetState) => state.dataSets
