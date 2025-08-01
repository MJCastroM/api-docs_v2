import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-Autenticacion',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AutenticacionComponent1751987195523 {
  pageTitle        = 'Autenticación';
  description      = ``;
  pubName    = '';
  programa   = '';
  scope      = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [];
  errors     = [];

  examples = {
    invocation: { xml: `
`,
    json: `
` },
    response:   { xml: `
`,
    json: `
` }
  };

  structuredTypes = [];
}
