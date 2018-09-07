import { createSelector } from '@ngrx/store';
import * as _ from 'lodash';

import { getRootState, State } from '../reducers';
import { getDataSets } from '../reducers/dataSet.reducer';
import { getSelectedOrgUnit } from './selectedOrgUnit.selector';
import { getUserAccess, getAuthorities } from './user.selector';
import { DataSet } from '../../models/dataSet.model';

export const getDataSetState = createSelector(
  getRootState,
  (state: State) => state.dataSet
);

export const getAllDatSets = createSelector(getDataSetState, getDataSets);

export const getSelectedDataSet = createSelector(
  getAllDatSets,
  getSelectedOrgUnit,
  getUserAccess,
  getAuthorities,
  (
    dataSets: DataSet[],
    selectedOrgUnit: any,
    userAccess: Array<string>,
    authorities: Array<string>
  ) => {
    console.log(_.some(authorities, 'ALL'));
    return _.some(authorities, 'ALL')
      ? _.filter(
          dataSets,
          (dataSet: DataSet) => dataSet.organisationUnits === selectedOrgUnit
        )
      : _.filter(dataSets, (dataSet: DataSet) =>
          _.some(userAccess, [dataSet.id])
        );
  }
);
