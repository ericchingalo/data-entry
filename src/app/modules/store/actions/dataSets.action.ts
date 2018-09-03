import { Action } from '@ngrx/store';
import { DataSet } from '../../models/dataSet.model';
import { ErrorMessage } from '../../models/error-message.module';

export enum DataSetsActionTypes{
    LoadDataSets = '[DataSets] Load Data sets',
    LoadDataSetsSuccess = '[DataSets] Load Data sets success',
    LoadDataSetsFail = '[DataSets] Load Data sets Fail',
}

export class LoadDataSets implements Action {
    readonly type = DataSetsActionTypes.LoadDataSets
}

export class LoadDataSetsSuccess implements Action{
    readonly type = DataSetsActionTypes.LoadDataSetsSuccess;
    constructor(public payload : DataSet[]){}
}

export class LoadDataSetsFail implements Action{
    readonly type = DataSetsActionTypes.LoadDataSetsFail;
    constructor(public error : ErrorMessage){}
}

export type DataSetActions = LoadDataSets | LoadDataSetsSuccess | LoadDataSetsFail