import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { BrowserAnimationsModule }    from '@angular/platform-browser/animations';
import { MatSidenavModule }           from '@angular/material/sidenav';
import { MatListModule }              from '@angular/material/list';

import { AppComponent }               from './app.component';
import { AppRoutingModule }           from './app-routing.module'; // si lo usas
import { ApiDocsModule }              from './features/api-docs/api-docs.module';



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
  bootstrap: [ AppComponent ]
})
export class AppModule {}
