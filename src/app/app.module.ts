import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';

import { reducers, metaReducers, effects } from './modules/store'

import { AppComponent } from './app.component';
import { DataEntryComponent } from './modules/components/data-entry/data-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    DataEntryComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,

    FormsModule, 
    
    StoreModule.forRoot(reducers, {metaReducers}),

    EffectsModule.forRoot(effects),

    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
