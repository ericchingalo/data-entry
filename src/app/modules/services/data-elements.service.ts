import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@hisptz/ngx-dhis2-http-client'

@Injectable({
  providedIn: 'root'
})
export class DataElementsService {

  constructor(private httpService: NgxDhis2HttpClientService) { }

  getDataElements(){
    return this.httpService.get(`dataElements.json?paging=false&fields=id,name,formName,aggregationType,categoryCombo[id,name,categoryOptionCombos[id,name]],displayName,description,valueType,optionSet[name,options[name,id,code]]`);
  }
}
