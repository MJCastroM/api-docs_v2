import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SearchService, SearchResult } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  query = '';
  results: SearchResult[] = [];
  showPopup = false;

  @ViewChild('searchInput') searchInput!: ElementRef;

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
    this.showPopup = true;
    document.body.classList.add('popup-open');
  }

  clearResults() {
    this.query = '';
    this.results = [];
    this.showPopup = false;
    document.body.classList.remove('popup-open');

    // Sacar el foco manualmente del input
    this.searchInput?.nativeElement.blur();
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const clickedInside = this.elRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.clearResults();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey() {
    this.clearResults();
  }
}
