import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@hisptz/ngx-dhis2-http-client'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private htppService: NgxDhis2HttpClientService) {

   }

   getCurrentUserDetails(){
     return this.htppService.get(`26/me.json?fields=name,id,dataSets,programs,authorities,organisationUnits[id,displayName]`)
   }
}
