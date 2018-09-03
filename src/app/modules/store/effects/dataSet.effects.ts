import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/internal/operators';

import { DataSetsService } from '../../services/data-sets.service'
import { DataSet } from '../../models/dataSet.model'
import { ErrorMessage } from '../../models/error-message.module';

import { 
    DataSetsActionTypes,
    LoadDataSetsFail,
    LoadDataSetsSuccess
} from '../actions/dataSets.action'

@Injectable() export class DataSetsEffect {
    constructor(private action$ : Actions, private dataSetService : DataSetsService){}
    @Effect() loadDataSet$ : Observable<any> = this.action$.pipe(
        ofType(DataSetsActionTypes.LoadDataSets),
        switchMap(() => this.dataSetService.getDataSets().pipe(
            map((dataSets : DataSet[]) => new LoadDataSetsSuccess(dataSets)),
            catchError((error : ErrorMessage) => of(new LoadDataSetsFail(error)))
        ))
    )
}