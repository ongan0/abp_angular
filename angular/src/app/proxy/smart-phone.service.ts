import type { SmartPhoneDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SmartPhoneService {
  apiName = 'Default';
  

  create = (request: SmartPhoneDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SmartPhoneDto>({
      method: 'POST',
      url: '/api/app/smart-phone',
      body: request,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/smart-phone/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, SmartPhoneDto[]>({
      method: 'GET',
      url: '/api/app/smart-phone',
    },
    { apiName: this.apiName,...config });
  
    getById = (id: string,config?: Partial<Rest.Config>) =>
    this.restService.request<any, SmartPhoneDto>({
      method: 'GET',
      url: `/api/app/smart-phone/${id}/by-id`,
    },
    { apiName: this.apiName,...config });


  update = (request: SmartPhoneDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SmartPhoneDto>({
      method: 'PUT',
      url: '/api/app/smart-phone',
      body: request,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
