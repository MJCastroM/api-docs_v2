import {
  Component,
  Input,
  ViewChildren,
  QueryList,
  ElementRef
} from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { ViewportScroller }   from '@angular/common';

@Component({
  selector: 'app-structured-data',
  templateUrl: './structured-data.component.html'
})
export class StructuredDataComponent {
  @Input() types: any[] = [];

  // Capturamos las instancias de MatExpansionPanel…
  @ViewChildren('panel')
  panelComponents!: QueryList<MatExpansionPanel>;

  // …y sus elementos nativos
  @ViewChildren('panel', { read: ElementRef })
  panelEls!: QueryList<ElementRef<HTMLElement>>;

  constructor(private viewport: ViewportScroller) {}

  onContainerClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
      event.preventDefault();

      const fragment = target.getAttribute('href')!.slice(1);
      const panels = this.panelComponents.toArray();
      const panelEls = this.panelEls.toArray();

      // Abrir/cerrar cada panel según el id del host
      panels.forEach((panel, idx) => {
        const hostEl = panelEls[idx].nativeElement;
        if (hostEl.id === fragment) {
          panel.open();
        } else {
          panel.close();
        }
      });

      // Scroll suave al panel
      this.viewport.scrollToAnchor(fragment);
    }
  }
}
