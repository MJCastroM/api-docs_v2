import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../../route-animations';

@Component({
  selector: 'app-AnularChequeElectronico',
  templateUrl: '../../../DocTemplate.component.html',
  styleUrls: ['../../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AnularChequeElectronicoComponent1750268694012 {
  pageTitle        = 'Anular Cheque Electrónico';
  description      = `Método para anular un cheque electrónico de una chequera.`;
  pubName    = 'BTCuentasCorrientes.AnularChequeElectronico';
  programa   = 'RBTPAR31';
  scope      = 'Argentina';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación de subcuenta.' }, { Nombre: 'numeroCheque', Tipo: 'Int', Comentarios: 'Número de cheque a anular.' }];
  outputData = [{ Nombre: 'listaCheques', Tipo: '[sBTChequeElectronico](#sbtchequeelectronico)', Comentarios: 'Listado de cheques electrónicos.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de la operación.' }, { Codigo: '30002', Descripcion: 'No existe registro con el identificador indicado.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasCorrientes.AnularChequeElectronico>
         <bts:Btinreq>
           <bts:Device>10</bts:Device>
            <bts:Usuario>BA</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>ec8CE93AA1</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>15</bts:operacionUId>
         <bts:numeroCheque>1</bts:numeroCheque>
      </bts:BTCuentasCorrientes.AnularChequeElectronico>
   </soapenv:Body>
</soapenv:Envelope></soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?AnularChequeElectronico\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"operacionUId": "15",
	"numeroCheque": "1",
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasCorrientes.AnularChequeElectronicoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>BA</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>ec8CE93AA1</Token>
         </Btinreq>
         <listaCheques></listaCheques>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>2565</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasCorrientes.AnularChequeElectronico</Servicio>
            <Fecha>2019-05-28</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>11:40:41</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasCorrientes.AnularChequeElectronicoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"listaCheques": {
        "sBTChequeElectronico": []
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8396,
        "Estado": "OK",
        "Servicio": "BTCuentasCorrientes.AnularChequeElectronico",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTChequeElectronico', fields: [{ Nombre: 'beneficiario', Tipo: 'String', Comentarios: 'Nombre del beneficiario.' }, { Nombre: 'cmc7', Tipo: 'Long', Comentarios: 'Identificador CMC7 de cheque electrónico.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: 'numerocheque', Tipo: 'Long', Comentarios: 'Numero de cheque electrónico.' }, { Nombre: 'numerochequera', Tipo: 'Long', Comentarios: 'Numero de chequera electrónica.' }] }];
}
