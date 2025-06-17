import { Component, Input } from '@angular/core';

export interface SdtField {
  Nombre: string;
  Tipo: string;
  Comentarios: string;
}

export interface Sdt {
  typeName: string;
  fields: SdtField[];
  // NEW: optional nested SDTs
  children?: Sdt[];
}

@Component({
  selector: 'app-structured-data',
  templateUrl: './structured-data.component.html',
  styleUrls: ['./structured-data.component.scss']
})
export class StructuredDataComponent {
  /** 
   * List of SDT definitions. Each may have its own `children` array of nested SDTs.
   */
  @Input() types: Sdt[] = [];
}
