// src/app/features/tu-carpeta/search/search.component.ts
import { Component } from '@angular/core';
import { SearchService, SearchResult } from '../../../services/search.service';

@Component({
  selector: 'app-search',
  template: `
    <div>
      <input
        type="text"
        [(ngModel)]="query"
        placeholder="Buscar..."
      />
      <button (click)="search()">Buscar</button>

      <ul *ngIf="results.length">
        <li *ngFor="let r of results">
          <!-- Enlace clickeable -->
          <a [href]="r.url" target="_blank">{{ r.url }}</a>
          <!-- Snippet de contexto -->
          <p class="snippet">{{ r.snippet }}</p>
        </li>
      </ul>

      <p *ngIf="searchDone && !results.length">
        No se encontraron resultados.
      </p>
    </div>
  `,
  styles: [`
    .snippet {
      margin: 0.25em 0 1em;
      font-style: italic;
      color: #666;
    }
    li {
      margin-bottom: 1em;
    }
  `]
})
export class SearchComponent {
  query = '';
  results: SearchResult[] = [];
  searchDone = false;

  constructor(private searchService: SearchService) {}

  search() {
    this.searchDone = false;
    this.results = [];

    if (!this.query.trim()) {
      this.searchDone = true;
      return;
    }

    // Ahora devuelve SearchResult[]
    this.results = this.searchService.search(this.query);
    this.searchDone = true;
  }
}
