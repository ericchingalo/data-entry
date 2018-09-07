import { Action } from  '@ngrx/store';

export enum OrganisationUnitActionTypes {
    LoadOrgUnit = '[OrganisationUnit] Load orgUnit'
}

export class LoadOrgUnit implements Action{
    readonly type = OrganisationUnitActionTypes.LoadOrgUnit;
    constructor(public payload : any){}
}

export type OrganisationUnitActions = LoadOrgUnit;