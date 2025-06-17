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
  pageTitle = 'Novedades Release Mayo 2025';
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
