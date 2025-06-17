import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-CHAT',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CHATComponent {
  pageTitle = 'CHAT';
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
