import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerDetalleBloqueo',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDetalleBloqueoComponent {
  pageTitle = 'Obtener Detalle Bloqueo';
  description = `Metodo para obtener el detalle de un bloqueo.`;
  pubName    = 'BTCuentasVista.ObtenerDetalleBloqueo';
  programa   = 'RBTPG140';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'idBloqueo', Tipo: 'Long', Comentarios: 'Identificador de bloqueo.' }];
  outputData = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }, { Nombre: 'importe', Tipo: 'Long', Comentarios: 'Importe bloqueado.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha vencimiento de bloqueo.' }, { Nombre: 'motivo', Tipo: 'String', Comentarios: 'Motivo del bloqueo.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador del bloqueo.' }, { Codigo: '40001', Descripcion: 'No se pudo encontrar el registro correspondiente al Id de Bloqueo.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasVista.ObtenerDetalleBloqueo>
         <bts:Btinreq>
            <bts:Device>3</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>3</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>b1848faff14A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:idBloqueo>23</bts:idBloqueo>
      </bts:BTCuentasVista.ObtenerDetalleBloqueo>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerDetalleBloqueo=' \
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
    "idBloqueo": 23
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasVista.ObtenerDetalleBloqueoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>3</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>3</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b1848faff14A8B5C60A82434</Token>
         </Btinreq>
         <operacionUId>3</operacionUId>
         <clienteUId>61</clienteUId>
         <importe>10.0</importe>
         <fechaVencimiento>2018-05-14</fechaVencimiento>
         <motivo>Motivo Bloqueo 01</motivo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>222</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasVista.ObtenerDetalleBloqueo</Servicio>
            <Requerimiento>3</Requerimiento>
            <Fecha>2018-05-08</Fecha>
            <Hora>16:05:30</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.ObtenerDetalleBloqueoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": "3",
    "clienteUId": "61",
    "importe": "10.0",
    "fechaVencimiento": "2018-05-14",
    "motivo": "Motivo Bloqueo 01",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "225",
        "Estado": "OK",
        "Servicio": "BTCuentasVista.ObtenerDetalleBloqueo",
        "Requerimiento": "2",
        "Fecha": "2018-05-08",
        "Hora": "16:10:37",
        "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [];
}
