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
  pageTitle = 'Autenticacion';
  description = ``;
  pubName    = '';
  programa   = '';
  scope      = '';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [];
  outputData = [];
  errors     = [];

  examples = {
    invocation: { xml: ``, json: `` },
    response:   { xml: ``,  json: `` }
  };

  structuredTypes = [];
}
