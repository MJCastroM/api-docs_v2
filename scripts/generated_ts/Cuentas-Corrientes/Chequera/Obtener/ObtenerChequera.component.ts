import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../../route-animations';

@Component({
  selector: 'app-ObtenerChequera',
  templateUrl: '../../../DocTemplate.component.html',
  styleUrls: ['../../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerChequeraComponent1750713393715 {
  pageTitle        = 'Obtener Chequera';
  description      = `Método para obtener los datos de una chequera de una cuenta corriente.`;
  pubName    = 'BTCuentasCorrientes.ObtenerChequera';
  programa   = 'RBTPG240';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'chequeraId', Tipo: 'Long', Comentarios: 'Identificador de la solicitud de chequera' }];
  outputData = [{ Nombre: 'sdtDatosChequera', Tipo: '[sBTDatosChequera](#sbtdatoschequera)', Comentarios: 'Datos de la chequera' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador de chequera' }, { Codigo: '30002', Descripcion: 'No existe chequera con el identificador ingresado' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasCorrientes.ObtenerChequera>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>93f61d299b4A8B</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:chequeraId>37</bts:chequeraId>
      </bts:BTCuentasCorrientes.ObtenerChequera>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?ObtenerChequera\' \
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
	"chequeraId":"37"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasCorrientes.ObtenerChequeraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>93f61d299b4A8B</Token>
         </Btinreq>
         <sdtDatosChequera>
            <totalCheques>25</totalCheques>
            <estado>SOLICITADA</estado>
            <chequeInicial>2226</chequeInicial>
            <titular>SOSA PEREZ ANA</titular>
            <cantidadLibretas>1</cantidadLibretas>
            <empresa>1</empresa>
            <operacionUId>2</operacionUId>
            <tipoId>1</tipoId>
            <tipo>Chequera Común 25 / Pesos</tipo>
            <estadoId>1</estadoId>
            <solicitud>37</solicitud>
         </sdtDatosChequera>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8418</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasCorrientes.ObtenerChequera</Servicio>
            <Fecha>2019-05-07</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>13:20:16</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasCorrientes.ObtenerChequeraResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"sdtDatosChequera": {
		"totalCheques": 25,
		"estado": "SOLICITADA",
		"chequeInicial": 2226,
		"titular": "SOSA PEREZ ANA",
		"cantidadLibretas": 1,
		"empresa": 1,
		"operacionUId": 2,
		"tipoId": 1,
		"tipo": "Chequera Común 25 / Pesos",
		"solicitud": 37  
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8418,
        "Estado": "OK",
        "Servicio": "BTCuentasCorrientes.ObtenerChequera",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDatosChequera', fields: [{ Nombre: 'cantidadLibretas', Tipo: 'Short', Comentarios: 'Cantidad de libretas.' }, { Nombre: 'chequeInicial', Tipo: 'Int', Comentarios: 'Cheque inicial.' }, { Nombre: 'empresa', Tipo: 'Short', Comentarios: 'Empresa de emisión de la chequera.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado actual de la solicitud de la chequera.' }, { Nombre: 'estadoId', Tipo: 'Short', Comentarios: 'Identificador del estado de la solicitud de la chequera.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación de subcuenta.' }, { Nombre: 'solicitud', Tipo: 'Long', Comentarios: 'Identificador de la solicitud de chequera.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo de chequera.' }, { Nombre: 'tipoId', Tipo: 'Short', Comentarios: 'Identificador de tipo de chequera.' }, { Nombre: 'titular', Tipo: 'String', Comentarios: 'Titular de la cuenta.' }, { Nombre: 'totalCheques', Tipo: 'Short', Comentarios: 'Cantidad de cheques de la chequera.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
