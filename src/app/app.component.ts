import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation, zoomAnimation } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation] // o [zoomAnimation]
})

export class AppComponent {
  title = 'api-docs';
  prepareRoute() {
    return true; // Siempre aplica la animación
  }
}
