import { Component, HostListener, ElementRef } from '@angular/core';
import { SearchService, SearchResult } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  query = '';
  results: SearchResult[] = [];
  searchDone = false;

  constructor(
    private searchService: SearchService,
    private elRef: ElementRef
  ) {}

  search() {
    if (!this.query.trim()) {
      this.clearResults();
      return;
    }

    this.results = this.searchService.search(this.query);
    this.searchDone = true;
  }

  clearResults() {
    this.results = [];
    this.searchDone = false;
  }

  // Cerrar al hacer clic fuera del componente
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.clearResults();
    }
  }

  // Cerrar al presionar Escape
  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey() {
    this.clearResults();
  }
}
