import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BTCliObtSldPrdComp } from './Clientes/BTCliObtSldPrd.component';
import { ContratarComponent } from './Clientes/Contratar.component';
import { ObtenerDetalledePrestamoCanceladoComponent } from './Clientes/ObtenerDetalledePréstamoCancelado.component';
import { ObtenerSaldosdeOtrosProductosComponent } from './Clientes/ObtenerSaldosdeOtrosProductos.component';

var routes: Routes = [
  { path: 'BTCliObtSldPrd', component: BTCliObtSldPrdComp },
  { path: 'Contratar', component: ContratarComponent },
  { path: 'ObtenerDetalledePrstamoCancelado', component: ObtenerDetalledePrestamoCanceladoComponent },
  { path: 'ObtenerSaldosdeOtrosProductos', component: ObtenerSaldosdeOtrosProductosComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ApiDocsRoutingModule {}
