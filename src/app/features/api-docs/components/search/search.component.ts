import { Component, HostListener, ElementRef  } from '@angular/core';
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

  readonly elRef: ElementRef;

  constructor(
    private searchService: SearchService,
    elRef: ElementRef
  ) {
    this.elRef = elRef;
  }

  search() {
    if (!this.query.trim()) return this.clearResults();

    this.results = this.searchService.search(this.query);
    this.searchDone = true;
  }

  isFocused = false;

  onBlur() {
    // Usamos un timeout corto para que no se cierre antes de hacer click en los resultados
    setTimeout(() => {
      this.isFocused = false;
      this.clearResults();
    }, 100);
  }

  clearResults() {
    this.query = '';
    this.results = [];
    this.searchDone = false;
  }

  @HostListener('document:keydown.escape')
  handleEscapeKey() {
    this.clearResults();
  }

  @HostListener('document:keydown.control.f', ['$event'])
  handleCtrlF(event: KeyboardEvent) {
    event.preventDefault(); // evitar que se abra el buscador del navegador
    this.focusSearchInput();
  }

  focusSearchInput() {
    const input = this.elRef.nativeElement.querySelector('input');
    if (input) {
      input.focus();
    }
  }

}
