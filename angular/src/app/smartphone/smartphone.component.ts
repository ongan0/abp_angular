// import { ListService, PagedResultDto } from '@abp/ng.core';
// import { Component, OnInit } from '@angular/core';
// import { SmartPhoneService, SmartPhoneDto } from '@proxy';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-smartphone',
//   templateUrl: './smartphone.component.html',
//   styleUrls: ['./smartphone.component.scss'],
//   providers: [ListService],
// })
// export class SmartphoneComponent implements OnInit {
//   smart = { items: [], totalCount: 0 } as PagedResultDto<SmartPhoneDto>;

//   constructor(public readonly list: ListService, private smartService: SmartPhoneService) {}

//   ngOnInit() {
//     const smartStreamCreator = (query) => this.smartService.getList(query);


//     this.list.hookToQuery(smartStreamCreator).subscribe((response) => {
//       this.smart = response;
//     });
//   }
// }



import { ToasterService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { SmartPhoneDto, SmartPhoneService } from '@proxy';

@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.scss']
})
export class SmartphoneComponent implements OnInit {
  smartPhones: SmartPhoneDto[];
  newSmartId: string;
  newSmartName: string;
  newSmartQuantity: number;
  newSmartPrice: number;
  smartPhone: SmartPhoneDto;

  constructor(
    private smartService: SmartPhoneService,
    private toasterService: ToasterService) { }

  ngOnInit(): void {
    this.smartService.getList().subscribe(response => {
      this.smartPhones = response;
    });
  }

  create(): void {
    this.smartPhone.name = this.newSmartName;
    this.smartPhone.quantity = this.newSmartQuantity;
    this.smartPhone.price = this.newSmartPrice;
    this.smartService.create(this.smartPhone).subscribe((result) => {
      this.smartPhones = this.smartPhones.concat(result);
      this.smartPhone = null;
    });
  }

  delete(id: string): void {
    this.smartService.delete(id).subscribe(() => {
      this.smartPhones = this.smartPhones.filter(item => item.id !== id);
      this.toasterService.info('Deleted the todo item.');
    });
  }
}
