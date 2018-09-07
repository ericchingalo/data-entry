import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@hisptz/ngx-dhis2-http-client'

@Injectable({
  providedIn: 'root'
})
export class DataSetsService {

  constructor(private httpService: NgxDhis2HttpClientService) { }

  getDataSets(){
    return this.httpService.get(`dataSets.json?paging=false&fields=id,name,timelyDays,formType,dataEntryForm[htmlCode],compulsoryDataElementOperands[name,dimensionItemType,dimensionItem],version,periodType,organisationUnits[id]openFuturePeriods,expiryDays,dataSetElements[dataElement[id]],dataElements[id],sections[id],indicators[id],categoryCombo[id,name,categoryOptionCombos[id,name,categoryOptions[id]],categories[id,name,categoryOptions[id,name,organisationUnits[id]]]]`);
  }
}
