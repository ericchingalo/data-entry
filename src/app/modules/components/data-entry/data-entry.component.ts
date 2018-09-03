import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, LoadDataElement, LoadDataSets, LoadUser } from '../../store';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {

  constructor(private store : Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new LoadDataElement())
    this.store.dispatch(new LoadDataSets())
    this.store.dispatch(new LoadUser())
  }

}
