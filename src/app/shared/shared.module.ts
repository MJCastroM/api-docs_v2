// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnchorScrollDirective } from './directives/anchor-scroll.directive';
import { MarkdownLinkPipe } from './pipes/markdown-link.pipe';
import { PanelLinkDirective } from './directives/panel-link.directive';

@NgModule({
  declarations: [
    PanelLinkDirective,
    AnchorScrollDirective,
    MarkdownLinkPipe
    // …otros pipes/directivas…
  ],
  exports: [
    PanelLinkDirective,
    AnchorScrollDirective,
    MarkdownLinkPipe
    // …otros pipes/directivas…
  ],
  imports: [ CommonModule ]
})
export class SharedModule { }
