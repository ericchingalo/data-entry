import {
  OrganisationUnitActionTypes,
  OrganisationUnitActions
} from '../actions';

export interface OrgUnitState {
  SelectedorgUnit: {
    id: string;
    displayName: string;
  };
}

export const initialState: OrgUnitState = {
  SelectedorgUnit: null
};

export function SelectedOrgUnitReducer(
  state = initialState,
  action: OrganisationUnitActions
) {
  switch (action.type) {
    case OrganisationUnitActionTypes.LoadOrgUnit:
      return {
        ...state,
        SelectedorgUnit: action.payload
      };

    default:
      return state;
  }
}

export const getOrgUnit = (state: OrgUnitState) => state.SelectedorgUnit;
