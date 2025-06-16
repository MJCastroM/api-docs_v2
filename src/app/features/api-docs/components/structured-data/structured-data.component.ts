import { Component, Input } from '@angular/core';

@Component({ selector: 'app-structured-data', templateUrl: './structured-data.component.html', 
  styleUrls: ['./structured-data.component.scss'] 
})
export class StructuredDataComponent {
  @Input() types!: { Nombre: string; Tipo: string; Comentarios: string }[];
}
