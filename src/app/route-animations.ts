import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  // Cuando el componente entra en el DOM…
  transition(':enter', [
    style({ opacity: 0 }),
    animate('700ms ease-in', style({ opacity: 1 }))
  ]),
  // Cuando el componente sale del DOM…
  transition(':leave', [
    animate('350ms ease-out', style({ opacity: 0 }))
  ])
]);
