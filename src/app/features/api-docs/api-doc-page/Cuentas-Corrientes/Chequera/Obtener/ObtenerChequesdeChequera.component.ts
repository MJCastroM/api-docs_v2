import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../../route-animations';

@Component({
  selector: 'app-ObtenerChequesdeChequera',
  templateUrl: '../../../DocTemplate.component.html',
  styleUrls: ['../../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerChequesdeChequeraComponent1750713393721 {
  pageTitle        = 'Obtener Cheques de Chequera';
  description      = `Método para obtener un listado de los cheques de una chequera.`;
  pubName    = 'BTCuentasCorrientes.ObtenerChequesDeChequera';
  programa   = 'RBTPG142';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación de subcuenta.' }, { Nombre: 'chequeraId', Tipo: 'Long', Comentarios: 'Identificador de solicitud de chequera.' }];
  outputData = [{ Nombre: 'sdtCheques', Tipo: '[sBTCheque](#sbtcheque)', Comentarios: 'Listado de cheques.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador de operación.' }, { Codigo: '30002', Descripcion: 'No se recibió identificador de chequera.' }, { Codigo: '30011', Descripcion: 'No se recuperó la operación para el identificador recibido.' }, { Codigo: '40003', Descripcion: 'La chequera no pertenece a la operación.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasCorrientes.ObtenerChequesDeChequera>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>1820366692F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>10176</bts:operacionUId>
         <bts:chequeraId>21</bts:chequeraId>
      </bts:BTCuentasCorrientes.ObtenerChequesDeChequera>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?ObtenerChequesDeChequera\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "BANTOTAL",
	  "Token": "1820366692F955E77534D3E0",
	  "Device": "AC"
	},
	"operacionUId": "10176",
	"chequeraId": "21"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasCorrientes.ObtenerChequesDeChequeraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>1820366692F955E77534D3E0</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtCheques>
            <SdtsBTCheque>
               <numero>1326</numero>
               <estado>1</estado>
               <descripcion>Pago</descripcion>
            </SdtsBTCheque>
            <SdtsBTCheque>
               <numero>1327</numero>
               <estado>1</estado>
               <descripcion>Pago</descripcion>
            </SdtsBTCheque>
            ...
         </sdtCheques>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCuentasCorrientes.ObtenerChequesDeChequera</Servicio>
            <Fecha>2020-11-13</Fecha>
            <Hora>15:25:51</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7904</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCuentasCorrientes.ObtenerChequesDeChequeraResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "BANTOTAL",
	  "Token": "1820366692F955E77534D3E0",
	  "Device": "AC"
	},
	"sdtCheques": {
	  "SdtsBTCheque": [
		{
		  "numero": "1326",
		  "estado": "1",
		  "descripcion": "Pago"
		},
		{
		  "numero": "1327",
		  "estado": "1",
		  "descripcion": "Pago"
		},
		...
	  ]
	},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTCuentasCorrientes.ObtenerChequesDeChequera",
	  "Fecha": "2020-11-13",
	  "Hora": "15:25:51",
	  "Requerimiento": "1",
	  "Numero": "7904",
	  "Estado": "OK"
	}
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTCheque', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción.' }, { Nombre: 'estado', Tipo: 'Short', Comentarios: 'Estado del cheque.' }, { Nombre: 'numero', Tipo: 'Int', Comentarios: 'Número de cheque.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
