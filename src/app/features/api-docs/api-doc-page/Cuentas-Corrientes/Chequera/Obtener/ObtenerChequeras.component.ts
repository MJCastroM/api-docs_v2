import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../../route-animations';

@Component({
  selector: 'app-ObtenerChequeras',
  templateUrl: '../../../DocTemplate.component.html',
  styleUrls: ['../../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerChequerasComponent1750258524990 {
  pageTitle        = 'Obtener Chequeras';
  description      = `Método para obtener un listado de las chequeras activas de una cuenta corriente.`;
  pubName          = 'Obtener Chequeras';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }];
  outputData = [{ Nombre: 'sdtChequeras', Tipo: '[sBTChequerasCC](#sbtchequerascc)', Comentarios: 'Listado de chequeras.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de Operación.' }, { Codigo: '30002', Descripcion: 'No se recuperó la operación para el identificador.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasCorrientes.ObtenerChequeras>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>81</bts:operacionUId>
      </bts:BTCuentasCorrientes.ObtenerChequeras>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes?ObtenerChequeras=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6ac0ee72-d095-6a5a-e735-c5fe1a6935af\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 81
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasCorrientes.ObtenerChequerasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>407fce50864A8B5C60A82434</Token>
         </Btinreq>
         <sdtChequeras>
            <chequera></chequera>
            <productoUId>81</productoUId>
            <cantidad>0</cantidad>
         </sdtChequeras>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>992</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasCorrientes.ObtenerChequeras</Servicio>
            <Fecha>2017-12-26</Fecha>
            <Requerimiento/>
            <Hora>11:16:17</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasCorrientes.ObtenerChequerasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtChequeras": {
        "chequera": {
            "sBTChequera": []
        },
        "productoUId": "81",
        "cantidad": "0"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "993",
        "Estado": "OK",
        "Servicio": "BTCuentasCorrientes.ObtenerChequeras",
        "Fecha": "2017-12-26",
        "Requerimiento": "",
        "Hora": "11:19:27",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTChequerasCC', fields: [{ Nombre: 'cantidad', Tipo: 'Int', Comentarios: 'Cantidad de chequeras.' }, { Nombre: 'chequera', Tipo: '[sBTChequera](#sbtchequera)', Comentarios: 'Datos de Chequera.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTChequera', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTChequera son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'cantidadCheques', Tipo: 'Short', Comentarios: 'Cantidad de cheques.' }, { Nombre: 'chequeInicial', Tipo: 'Int', Comentarios: 'Número de cheque en el cual inicia la chequera.' }, { Nombre: 'chequesDisponibles', Tipo: 'Short', Comentarios: 'Cantidad de cheques disponibles.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'estado de chequera.' }, { Nombre: 'fechaAlta', Tipo: 'Date', Comentarios: 'Fecha de alta.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'tipo de chequera.' }] }];
}
