import { Component, ElementRef } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeFade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class AppComponent {
  title = 'api-docs';
  showZoom = false;

  triggerThemeTransition(callback: () => void) {
    this.showZoom = true;

    setTimeout(() => {
      callback();
    }, 200);

    setTimeout(() => {
      this.showZoom = false;
    }, 600);
  }
}
