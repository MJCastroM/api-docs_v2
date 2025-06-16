import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BTCliObtSldPrdComp } from './BTCliObtSldPrd/BTCliObtSldPrd.component';
import { BTCliObtSldPrdComp2 } from './BTCliObtSldPrd/BTCliObtSldPrd2.component';

const routes: Routes = [
  { path: 'BTCliObtSldPrd', component: BTCliObtSldPrdComp },
  { path: 'BTCliObtSldPrd2', component: BTCliObtSldPrdComp2 }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ApiDocsRoutingModule {}
