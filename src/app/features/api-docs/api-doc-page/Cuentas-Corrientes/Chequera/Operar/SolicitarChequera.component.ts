import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../../route-animations';

@Component({
  selector: 'app-SolicitarChequera',
  templateUrl: '../../../DocTemplate.component.html',
  styleUrls: ['../../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SolicitarChequeraComponent1751987196970 {
  pageTitle        = 'Solicitar Chequera';
  description      = `Método para solicitar una chequera para una cuenta corriente.`;
  pubName    = 'BTCuentasCorrientes.SolicitarChequera';
  programa   = 'RBTPG242';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación de subcuenta.' }, { Nombre: 'tipoCheque', Tipo: 'Double', Comentarios: 'Tipo de chequera a solicitar.' }, { Nombre: 'cantidadLibretas', Tipo: 'Double', Comentarios: 'Cantidad de libretas a solicitar.' }, { Nombre: 'datosSolicitud', Tipo: '[sBTSolicitudChequera](#sbtsolicitudchequera)', Comentarios: 'Datos de solicitud de chequera.' }];
  outputData = [{ Nombre: 'chequeraId', Tipo: 'Long', Comentarios: 'Identificador de la solicitud de chequera.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió identificador de operación.' }, { Código: '40003', Descripción: 'El tipo de chequera a agregar es incorrecto.' }, { Código: '40004', Descripción: 'El tipo de chequera a agregar es incorrecto para el módulo.' }, { Código: '40005', Descripción: 'La subcuenta no tiene estado normal.' }, { Código: '40007', Descripción: 'El tipo de chequera a agregar es incorrecto para el producto.' }, { Código: '40008', Descripción: 'Usuario no autorizado.' }, { Código: '40010', Descripción: 'La cuenta no tiene habilitada la entrega de chequeras.' }, { Código: '40011', Descripción: 'Debe indicar la cantidad de libretas.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasCorrientes.SolicitarChequera>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>c5b241f7334A8</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:operacionUId>2</bts:operacionUId>
         <bts:tipoCheque>1</bts:tipoCheque>
         <bts:cantidadLibretas>1</bts:cantidadLibretas>
         <bts:datosSolicitud>
            <bts:persona1Texto1>D.N.I. 123456</bts:persona1Texto1>
            <bts:persona1Texto2>Juan Perez</bts:persona1Texto2>
            <bts:persona2Texto1></bts:persona2Texto1>
            <bts:persona2Texto2></bts:persona2Texto2>  
            <bts:persona3Texto1></bts:persona3Texto1>  
            <bts:persona3Texto2></bts:persona3Texto2>  
            <bts:domicilio>Avenida Italia 2145</bts:domicilio>
            <bts:sucuraslDeRetiroId></bts:sucuraslDeRetiroId>
         </bts:datosSolicitud>
      </bts:BTCuentasCorrientes.SolicitarChequera>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?SolicitarChequera\' \
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
	"operacionUId":"2",
   "tipoCheque":"1",
   "cantidadLibretas":"1",
   "bts:datosSolicitud": {
          "bts:persona1Texto1": "D.N.I. 123456",
          "bts:persona1Texto2": "Juan Perez",
          "bts:persona2Texto1": " ",
          "bts:persona2Texto2": " ",
          "bts:persona3Texto1": " ",
          "bts:persona3Texto2": " ",
          "bts:domicilio": "Avenida Italia 2145",
          "bts:sucuraslDeRetiroId": " "
        }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasCorrientes.SolicitarChequeraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.118</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>c5b241f7334A8</Token>
         </Btinreq>
         <chequeraId>32</chequeraId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8396</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasCorrientes.SolicitarChequera</Servicio>
            <Fecha>2019-05-07</Fecha>
            <Hora>12:59:00</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasCorrientes.SolicitarChequeraResponse>
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
	"chequeraId": 32,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8396,
        "Estado": "OK",
        "Servicio": "BTCuentasCorrientes.SolicitarChequera",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTSolicitudChequera', fields: [{ Nombre: 'domicilio', Tipo: 'String', Comentarios: 'Domicilio a enviar la chequera.' }, { Nombre: 'persona1Texto1', Tipo: 'String', Comentarios: 'Información persona 1.' }, { Nombre: 'persona1Texto2', Tipo: 'String', Comentarios: 'Información complementaria persona 1.' }, { Nombre: 'persona2Texto1', Tipo: 'String', Comentarios: 'Información persona 2.' }, { Nombre: 'persona2Texto2', Tipo: 'String', Comentarios: 'Información complementaria persona 2.' }, { Nombre: 'persona3Texto1', Tipo: 'String', Comentarios: 'Información persona 3.' }, { Nombre: 'persona3Texto2', Tipo: 'String', Comentarios: 'Información complementaria persona 3.' }, { Nombre: 'sucuraslDeRetiroId', Tipo: 'Int', Comentarios: 'Identificador de la sucursal de retiro.' }] }];
}
