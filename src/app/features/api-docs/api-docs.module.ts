import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule }   from '@angular/material/sidenav';
import { MatListModule }      from '@angular/material/list';
import { MatCardModule }      from '@angular/material/card';
import { MatIconModule }      from '@angular/material/icon';
import { MatTabsModule }      from '@angular/material/tabs';
import { MatTableModule }     from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule }    from '@angular/material/button';

import { SidebarComponent }        from './components/sidebar/sidebar.component';
import { PageHeaderComponent }     from './components/page-header/page-header.component';
import { InfoCardComponent }       from './components/info-card/info-card.component';
import { BackendConfigComponent }  from './components/backend-config/backend-config.component';
import { ApiTabsComponent }        from './components/api-tabs/api-tabs.component';
import { ApiTableComponent }       from './components/api-table/api-table.component';
import { CodeExampleComponent }    from './components/code-example/code-example.component';
import { StructuredDataComponent } from './components/structured-data/structured-data.component';
import { BTCliObtSldPrdComp }     from './api-doc-page/BTCliObtSldPrd/BTCliObtSldPrd.component';
import { BTCliObtSldPrdComp2 }     from './api-doc-page/BTCliObtSldPrd/BTCliObtSldPrd2.component';
import { PrismHighlightDirective }     from './prism-highlight.directive';
import { ApiDocsRoutingModule } from './api-doc-page/api-docs-routing.module';


@NgModule({
  declarations: [
    BTCliObtSldPrdComp,
    CodeExampleComponent,
    StructuredDataComponent,
    SidebarComponent,
    PageHeaderComponent,
    InfoCardComponent,
    BackendConfigComponent,
    ApiTabsComponent,
    ApiTableComponent,
    CodeExampleComponent,
    StructuredDataComponent,
    BTCliObtSldPrdComp,
    BTCliObtSldPrdComp2,
    PrismHighlightDirective
  ],
  imports: [
    CommonModule,
    ApiDocsRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatExpansionModule,
    MatButtonModule
  ],
  exports: [
    SidebarComponent,
    BTCliObtSldPrdComp,
    BTCliObtSldPrdComp2     // exporta sólo lo que necesites fuera del módulo
  ]
})
export class ApiDocsModule {}
