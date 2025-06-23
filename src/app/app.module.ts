import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { BrowserAnimationsModule }    from '@angular/platform-browser/animations';
import { MatSidenavModule }           from '@angular/material/sidenav';
import { MatListModule }              from '@angular/material/list';

import { AppComponent }               from './app.component';
import { LayoutModule }               from './layout/layout.module';
import { FormsModule }                from '@angular/forms';
import { AppRoutingModule }           from './app-routing.module';
import { ApiDocsModule }              from './features/api-docs/api-docs.module';

import { MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from '@angular/material/core';

const globalRippleConfig: RippleGlobalOptions = {
  disabled: true,
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    FormsModule,
    ApiDocsModule,
    LayoutModule
  ],
  bootstrap: [ AppComponent ],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig }
  ]
})
export class AppModule {}
