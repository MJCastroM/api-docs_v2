import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

// Importamos el módulo donde está el SearchComponent
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatExpansionModule,
    RouterModule,
    SharedModule 
  ],
  exports: [LayoutComponent]
})
export class LayoutModule {}
