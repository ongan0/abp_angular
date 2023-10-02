import { ToasterService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { SmartPhoneDto, SmartPhoneService } from '@proxy';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  smartPhones: SmartPhoneDto[];
  newSmartId: string;
  newSmartName: string;
  newSmartQuantity: number;
  newSmartPrice: number;
  smartPhone: SmartPhoneDto = {};

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

    if (this.newSmartId == '' || this.newSmartId == null) {
      this.smartService.create(this.smartPhone).subscribe((result) => {
        this.smartPhones = this.smartPhones.concat(result);
        this.newSmartName = '';
        this.newSmartQuantity = null;
        this.newSmartPrice = null;
      });
    }
    else {
    this.smartPhone.id = this.newSmartId;
      this.smartService.update(this.smartPhone).subscribe((result) => {
        const index = this.smartPhones.findIndex(smartphone => smartphone.id === result.id);
        if (index !== -1) {
          this.smartPhones[index] = result;
        }
        this.newSmartId = null;
        this.newSmartName = '';
        this.newSmartQuantity = null;
        this.newSmartPrice = null;
      });
    }

  }

  detail(id: string): void {
    this.smartService.getById(id).subscribe((result) => {
      this.newSmartId = id;
      this.newSmartName = result.name;
      this.newSmartQuantity = result.quantity;
      this.newSmartPrice = result.price;
    });
  }

  delete(id: string): void {
    this.smartService.delete(id).subscribe(() => {
      this.smartPhones = this.smartPhones.filter(item => item.id !== id);
      this.toasterService.info('Deleted the todo item.');
    });
  }
}
