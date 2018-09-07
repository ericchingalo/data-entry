import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/internal/operators';

import { DataElementsService } from '../../services/data-elements.service';
import { DataElement } from '../../models/dataElement.mode';
import { ErrorMessage } from '../../models/error-message.module';

import {
  DataElementActionTypes,
  LoadDataElementFail,
  LoadDataElementSuccess
} from '../actions';

@Injectable()
export class DataElementsEffect {
  constructor(
    private action$: Actions,
    private dataElementService: DataElementsService
  ) {}
  @Effect()
  loadDataSet$: Observable<any> = this.action$.pipe(
    ofType(DataElementActionTypes.LoadDataElement),
    switchMap(() =>
      this.dataElementService.getDataElements().pipe(
        map(response => {
          const { dataElements } = response;
          return new LoadDataElementSuccess(dataElements);
        }),
        catchError((error: ErrorMessage) => of(new LoadDataElementFail(error)))
      )
    )
  );
}
