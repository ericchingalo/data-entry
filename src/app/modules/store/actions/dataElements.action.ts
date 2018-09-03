import { Action } from '@ngrx/store';
import { DataElement } from '../../models/dataElement.mode';
import { ErrorMessage } from '../../models/error-message.module';

export enum DataElementActionTypes{
    LoadDataElement = '[DataElement] Load DataElment',
    LoadDataElementSuccess = '[DataElement] Load DataElment Success',
    LoadDataElementFail = '[DataElement] Load DataElment Fail'
}

export class LoadDataElement implements Action {
    readonly type = DataElementActionTypes.LoadDataElement
}

export class LoadDataElementSuccess implements Action {
    readonly type = DataElementActionTypes.LoadDataElementSuccess;
    constructor(public payload : DataElement[]){}
}

export class LoadDataElementFail implements Action {
    readonly type = DataElementActionTypes.LoadDataElementFail;
    constructor(public error : ErrorMessage){}
}

export type DataElementActions = LoadDataElement | LoadDataElementSuccess | LoadDataElementFail;