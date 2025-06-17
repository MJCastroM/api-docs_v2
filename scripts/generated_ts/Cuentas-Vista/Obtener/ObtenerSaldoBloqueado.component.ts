import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerSaldoBloqueado',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerSaldoBloqueadoComponent {
  pageTitle = 'Obtener Saldo Bloqueado';
  description = `Metodo para obtener el total de saldo bloqueado de una cuenta vista.`;
  pubName    = 'BTCuentasVista.ObtenerSaldoBloqueado';
  programa   = 'RBTPG141';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }];
  outputData = [{ Nombre: 'saldoBloqueado', Tipo: 'Double', Comentarios: 'Total de saldo bloqueado.' }];
  errors     = [{ Codigo: '30002', Descripcion: 'No se encontro el Id de Operacion para la Cuenta Vista Bloqueada' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasVista.ObtenerSaldoBloqueado>
         <bts:Btinreq>
            <bts:Device>3</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>3</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>b1848faff14A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>3</bts:operacionUId>
      </bts:BTCuentasVista.ObtenerSaldoBloqueado>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerSaldoBloqueado=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 3
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasVista.ObtenerSaldoBloqueadoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>3</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>3</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b1848faff14A8B5C60A82434</Token>
         </Btinreq>
         <saldoBloqueado>1487.0</saldoBloqueado>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>219</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasVista.ObtenerSaldoBloqueado</Servicio>
            <Requerimiento>3</Requerimiento>
            <Fecha>2018-05-08</Fecha>
            <Hora>15:56:21</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.ObtenerSaldoBloqueadoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "saldoBloqueado": "1487.0",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "220",
        "Estado": "OK",
        "Servicio": "BTCuentasVista.ObtenerSaldoBloqueado",
        "Requerimiento": "2",
        "Fecha": "2018-05-08",
        "Hora": "15:58:32",
        "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [];
}
