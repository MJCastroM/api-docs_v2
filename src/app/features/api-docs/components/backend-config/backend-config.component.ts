import { Component, Input } from '@angular/core';

@Component({ selector: 'app-backend-config', templateUrl: './backend-config.component.html',
  styleUrls: ['./backend-config.component.scss'] })
export class BackendConfigComponent {
  @Input() backendCols!: string[];
  @Input() backendData!: any[];
  @Input() text!: string
}
