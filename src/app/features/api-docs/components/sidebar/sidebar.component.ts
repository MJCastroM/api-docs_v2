import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  // Lista de páginas (puedes usarla si decides hacer routing)
  pages: string[] = ['BTCliObtSldPrd', 'BTCliObtSldPrd2'];
}