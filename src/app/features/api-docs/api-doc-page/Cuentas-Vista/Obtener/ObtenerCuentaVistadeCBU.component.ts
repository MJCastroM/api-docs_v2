import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerCuentaVistadeCBU',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCuentaVistadeCBUComponent1750446218530 {
  pageTitle        = 'Obtener Cuenta Vista de CBU';
  description      = `Método para obtener el identificador de operación de una cuenta vista a partir del CBU.`;
  pubName    = 'BTCuentasVista.ObtenerCuentaVistaDeCBU';
  programa   = 'RBTPAR01';
  scope      = 'Argentina';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'CBU', Tipo: 'String', Comentarios: 'Clave Bancaria Uniforme.' }];
  outputData = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación CC o CA.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió CBU.' }, { Codigo: '40001', Descripcion: 'No se encontró operación correspondiente al CBU.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasVista.ObtenerCuentaVistaDeCBU>
		<Btinreq>
			<Device>AV</Device>
			<Usuario>MINSTALADOR</Usuario>
			<Requerimiento></Requerimiento>
			<Canal>BTDIGITAL</Canal>
			<Token>268b6d23eb4A8B5C60A82434</Token>
		</Btinreq>
		<CBU>3220001800000831740016</CBU>
      </bts:BTCuentasVista.ObtenerCuentaVistaDeCBU>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasVista.ObtenerCuentaVistaDeCBUResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
			<Device>AV</Device>
			<Usuario>MINSTALADOR</Usuario>
			<Requerimiento></Requerimiento>
			<Canal>BTDIGITAL</Canal>
			<Token>268b6d23eb4A8B5C60A82434</Token>
		</Btinreq>
		<operacionUId>281</operacionUId>
		<Erroresnegocio></Erroresnegocio>
		<Btoutreq>
			<Numero>868</Numero>
			<Estado>OK</Estado>
			<Servicio>BTCuentasVista.ObtenerCuentaVistaDeCBU</Servicio>
			<Requerimiento></Requerimiento>
			<Fecha>2017-12-18</Fecha>
			<Hora>17:15:28</Hora>
			<Canal>BTDIGITAL</Canal>
		</Btoutreq>
      </BTCuentasVista.ObtenerCuentaVistaDeCBUResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
` }
  };

  structuredTypes = [];
}
