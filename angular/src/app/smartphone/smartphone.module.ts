import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SmartphoneRoutingModule } from './smartphone-routing.module';
import { SmartphoneComponent } from './smartphone.component';


@NgModule({
  declarations: [
    SmartphoneComponent
  ],
  imports: [
    SharedModule,
    SmartphoneRoutingModule
  ]
})
export class SmartphoneModule { }
