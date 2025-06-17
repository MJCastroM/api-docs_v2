import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BTCliObtSldPrdComp } from './Clientes/BTCliObtSldPrd.component';
import { BTCliObtSldPrdComp2 } from './Clientes/BTCliObtSldPrd2.component';

var routes: Routes = [
  { path: 'BTCliObtSldPrd', component: BTCliObtSldPrdComp },
  { path: 'BTCliObtSldPrd2', component: BTCliObtSldPrdComp2 }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ApiDocsRoutingModule {}
