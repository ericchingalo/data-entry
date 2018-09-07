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
    const dataSetByOu: DataSet[] = [];
    let dataSetByAccess: DataSet[] = [];
    // filtering by OU
    dataSets.map(dataSet => {
      if (dataSet && dataSet.organisationUnits) {
        dataSet.organisationUnits.map(organisationUnit => {
          if (organisationUnit.id === selectedOrgUnit.id) {
            dataSetByOu.push(dataSet);
          }
        });
      }
    });
    // filtering by authorities
    if (_.indexOf(authorities, 'ALL') === -1) {
      dataSetByAccess = _.concat(
        dataSetByAccess,
        _.filter(dataSetByOu, (dataSet: DataSet) =>
          _.includes(userAccess, dataSet.id)
        )
      );
    } else {
      dataSetByAccess = _.concat(dataSetByAccess, dataSetByOu);
    }
    return dataSetByAccess;
  }
);
