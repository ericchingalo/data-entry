import { ErrorMessage } from '../../models/error-message.module';
import { DataElement } from '../../models/dataElement.mode';

import { DataElementActionTypes, DataElementActions } from '../actions';

export interface DataElementState {
  loading: boolean;
  loaded: boolean;
  error: ErrorMessage;
  dataElements: DataElement[];
}

export const initialState: DataElementState = {
  loading: false,
  loaded: false,
  error: null,
  dataElements: []
};

export function dataElementReducer(
  state = initialState,
  action: DataElementActions
) {
  switch (action.type) {
    case DataElementActionTypes.LoadDataElement:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
        dataElements: state.dataElements
      };

    case DataElementActionTypes.LoadDataElementSuccess:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null,
        dataElements: action.payload
      };

    case DataElementActionTypes.LoadDataElementFail:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
        dataElements: state.dataElements
      };

    default:
      return state;
  }
}

export const getDataElements = (state: DataElementState) => state.dataElements;
