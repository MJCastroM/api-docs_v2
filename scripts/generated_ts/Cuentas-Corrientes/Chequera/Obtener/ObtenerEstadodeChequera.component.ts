import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerEstadodeChequera',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerEstadodeChequeraComponent {
  pageTitle = 'Obtener Estado de Chequera';
  description = `Metodo para obtener el estado de una chequera.`;
  pubName    = 'BTCuentasCorrientes.ObtenerEstadoDeCheque';
  programa   = 'RBTPG241';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'chequeraId', Tipo: 'Long', Comentarios: 'Identificador de la solicitud de chequera.' }];
  outputData = [{ Nombre: 'estado', Tipo: '[sBTEstado](#sbtestado)', Comentarios: 'Estado de la chequera.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio identificador de chequera.' }, { Codigo: '40001', Descripcion: 'No se encontro la chequera ingresada.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasCorrientes.ObtenerEstadoDeChequera>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>93f61d299b4A8B</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:chequeraId>37</bts:chequeraId>
      </bts:BTCuentasCorrientes.ObtenerEstadoDeChequera>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?ObtenerEstadoDeChequera' \
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
	"chequeraId":"37"
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasCorrientes.ObtenerEstadoDeChequeraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>93f61d299b4A8B</Token>
         </Btinreq>
         <estado>
            <descripcion>SOLICITADA</descripcion>
            <identificador>1</identificador>
         </estado>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8421</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasCorrientes.ObtenerEstadoDeChequera</Servicio>
            <Fecha>2019-05-07</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>14:41:03</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasCorrientes.ObtenerEstadoDeChequeraResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"estado": {
		"descripcion": "SOLICITADA",
		"identificador": 1
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8418,
        "Estado": "OK",
        "Servicio": "BTCuentasCorrientes.ObtenerEstadoDeChequera",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [{ typeName: 'sBTEstado', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Estado actual de la solicitud de la chequera.' }, { Nombre: 'identificador', Tipo: 'Int', Comentarios: 'Identificador del estado.' }] }];
}
