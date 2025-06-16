import { Component, Input } from '@angular/core';

@Component({ selector: 'app-backend-config', templateUrl: './backend-config.component.html', 
  styleUrls: ['./backend-config.component.scss'] })
export class BackendConfigComponent {
  @Input() config!: { campo: string; valor: string }[];
  @Input() text!: string
}
