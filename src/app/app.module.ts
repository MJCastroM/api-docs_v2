import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { BrowserAnimationsModule }    from '@angular/platform-browser/animations';
import { MatSidenavModule }           from '@angular/material/sidenav';
import { MatListModule }              from '@angular/material/list';

import { AppComponent }               from './app.component';
import { AppRoutingModule }           from './app-routing.module'; // si lo usas
import { ApiDocsModule }              from './features/api-docs/api-docs.module';

import { MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from '@angular/material/core';

const globalRippleConfig: RippleGlobalOptions = {
  disabled: true,
};



@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,  // opcional
    ApiDocsModule
  ],
  bootstrap: [ AppComponent ],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig }
  ]
})
export class AppModule {}
