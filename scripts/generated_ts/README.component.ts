import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-README',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class NovedadesReleaseMayo2025Component {
  // Cabecera e info-card
  pageTitle = 'Novedades Release Mayo 2025';
  description = ``;
  pubName    = '';
  programa   = '';
  scope      = '';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = [];
  inputData  = [];
  outputCols = [];
  outputData = [];
  errorCols  = [];
  errors     = [];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: ``, json: `` }, response: { xml: ``, json: `` } };

  // Datos estructurados
  structuredTypes = [];
}
