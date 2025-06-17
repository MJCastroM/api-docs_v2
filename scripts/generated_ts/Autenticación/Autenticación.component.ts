import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-Autenticacin',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AutenticacionComponent {
  // Cabecera e info-card
  pageTitle = 'Autenticacion';
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
