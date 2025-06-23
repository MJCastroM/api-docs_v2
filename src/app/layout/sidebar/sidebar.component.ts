import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface SidebarItem {
  name: string;
  url?: string;
  type: 'file' | 'folder';
  children?: SidebarItem[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarData: SidebarItem[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<SidebarItem[]>('/assets/sidebar.json').subscribe({
      next: data => this.sidebarData = data,
      error: err => console.error('❌ No se pudo cargar sidebar.json', err)
    });
  }
}
