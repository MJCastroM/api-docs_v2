import { Component, OnInit } from '@angular/core';
// IMPORT SIN EXTENSIÓN: TS buscará sidebar.models.ts
import {
  Page,
  SidebarSection,
  SidebarSubsection,
  SidebarPage
} from './sidebar.models';
// Importa el JSON compilado
import indexData from '../../../assets/api-doc-page/index.json';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sections: SidebarSection[] = [];

  ngOnInit() {
    // “as any” porque resolveJsonModule tipa como unknown
    const pages = (indexData as any).pages as Page[];
    this.sections = this.buildMenu(pages);
  }

  private buildMenu(pages: Page[]): SidebarSection[] {
    const map = new Map<string, Map<string, SidebarPage[]>>();

    for (const p of pages) {
      const parts = p.url.split('/').filter(x => x);
      if (parts.length < 3) continue;

      const [secKey, subKey] = parts;
      const secMap = map.get(secKey) ?? new Map<string, SidebarPage[]>();
      const list = secMap.get(subKey) ?? [];

      list.push({ title: p.pageTitle, url: p.url });
      secMap.set(subKey, list);
      map.set(secKey, secMap);
    }

    return Array.from(map.entries())
      .map(([secKey, subMap]) => ({
        title: secKey.replace(/-/g, ' '),
        subsections: Array.from(subMap.entries())
          .map(([subKey, pages]) => ({
            title: subKey.replace(/-/g, ' '),
            pages: pages.sort((a, b) => a.title.localeCompare(b.title))
          }))
          .sort((a, b) => a.title.localeCompare(b.title))
      }))
      .sort((a, b) => a.title.localeCompare(b.title));
  }
}
