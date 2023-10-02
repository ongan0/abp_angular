import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartphoneComponent } from './smartphone.component';

// const routes: Routes = [{ path: 'smartphones', loadChildren: () => import('./smartphone.module').then(m => m.SmartphoneModule) }];
const routes: Routes = [{ path: 'smartphones', component: SmartphoneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartphoneRoutingModule { }
