import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';

import { State, LoadDataElement, LoadDataSets, LoadUser, getUserDetails, getAllDataElement, getAllDatSets, LoadOrgUnit, getSelectedOrgUnit } from '../../store';
import {  getSelectedDataSet } from '../../store/selectors/dataSet.sector'

import { User } from '../../models/user.model'
import { DataElement } from '../../models/dataElement.mode';
import { DataSet } from '../../models/dataSet.model';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})

export class DataEntryComponent implements OnInit {
  user$ : Observable <User>;
  dataElements$ : Observable <DataElement[]>;
  dataSets$ : Observable<DataSet[]>
  selectedOrgUnit$ : Observable<any>
 
  orgunisationUnit = {
    name : "Sierra Leone",
    id : "ImspTQPwCqd"
  }

  constructor(private store : Store<State>) { 
    this.user$ = this.store.select(getUserDetails)
    this.dataElements$ = this.store.select(getAllDataElement)
    this.dataSets$ = this.store.select(getSelectedDataSet)
    this.selectedOrgUnit$ = this.store.select(getSelectedOrgUnit);
  }

  ngOnInit() {
    this.store.dispatch(new LoadDataElement())
    this.store.dispatch(new LoadDataSets())
    this.store.dispatch(new LoadUser())
    this.store.dispatch(new LoadOrgUnit(this.orgunisationUnit))
  }

}
