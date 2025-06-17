import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BTCliObtSldPrdComp } from './Clientes/BTCliObtSldPrd.component';

var routes: Routes = [
  { path: 'BTCliObtSldPrd', component: BTCliObtSldPrdComp }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ApiDocsRoutingModule {}
