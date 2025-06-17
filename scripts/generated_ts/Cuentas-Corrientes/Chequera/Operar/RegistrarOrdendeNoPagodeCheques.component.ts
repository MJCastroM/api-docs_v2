import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-RegistrarOrdendeNoPagodeCheques',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class RegistrarOrdendeNoPagodeChequesComponent {
  pageTitle = 'Registrar Orden de No Pago de Cheques';
  description = `Metodo para registrar una orden de no pago de cheques.`;
  pubName    = 'BTCuentasCorrientes.RegistrarOrdenDeNoPagoCheques';
  programa   = 'RBTPG143';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion de subcuenta.' }, { Nombre: 'chequeraId', Tipo: 'Long', Comentarios: 'Identificador de solicitud de chequera.' }, { Nombre: 'tipoDenunciante', Tipo: 'String', Comentarios: 'Tipo de denunciante.' }, { Nombre: 'tipoDenuncia', Tipo: 'String', Comentarios: 'Tipo de denuncia.' }, { Nombre: 'motivoDenuncia', Tipo: 'String', Comentarios: 'Motivo de la denuncia.' }, { Nombre: 'sdtCheques', Tipo: '[sBTCheque](#sbtcheque)', Comentarios: 'Listado de cheques.' }];
  outputData = [{ Nombre: 'numeroDenuncia', Tipo: 'Long', Comentarios: 'Identificador de la denuncia.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio identificador de operacion.' }, { Codigo: '30002', Descripcion: 'No se recibio identificador de chequera.' }, { Codigo: '30003', Descripcion: 'Debe ingresar el numero del cheque.' }, { Codigo: '30011', Descripcion: 'No se recupero la operacion para el identificador recibido.' }, { Codigo: '40001', Descripcion: 'No existe la chequera ingresada.' }, { Codigo: '40002', Descripcion: 'No existe la operacion indicada.' }, { Codigo: '40003', Descripcion: 'La chequera no pertenece a la operacion.' }, { Codigo: '40004', Descripcion: 'La cuenta no esta habilitada.' }, { Codigo: '40005', Descripcion: 'La chequera no se encuentra activa.' }, { Codigo: '40006', Descripcion: 'Cuenta Cerrada, solo se permite consultas.' }, { Codigo: '40008', Descripcion: 'Los siguientes cheques no pertenecen a la chequera: [Numeros de cheques].' }, { Codigo: '40013', Descripcion: 'El cheque [Numero de cheque] ya esta pago.' }, { Codigo: '40014', Descripcion: 'El cheque [Numero de cheque] ya tiene O.N.P.' }, { Codigo: '40015', Descripcion: 'El cheque [Numero de cheque] esta rechazado.' }, { Codigo: '40016', Descripcion: 'El cheque [Numero de cheque] esta certificado.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasCorrientes.RegistrarOrdenDeNoPagoCheques>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>1820366692F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>10176</bts:operacionUId>
         <bts:chequeraId>21</bts:chequeraId>
         <bts:tipoDenunciante>A</bts:tipoDenunciante>
         <bts:tipoDenuncia>E</bts:tipoDenuncia>
         <bts:motivoDenuncia>P</bts:motivoDenuncia>
         <bts:sdtCheques>
            <bts:SdtsBTCheque>
               <bts:numero>1327</bts:numero>
               <bts:estado>1</bts:estado>
               <bts:descripcion>Prueba</bts:descripcion>
            </bts:SdtsBTCheque>
         </bts:sdtCheques>
      </bts:BTCuentasCorrientes.RegistrarOrdenDeNoPagoCheques>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?RegistrarOrdenDeNoPagoCheques' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "BANTOTAL",
	  "Token": "1820366692F955E77534D3E0",
	  "Device": "AC"
	},
	"operacionUId": "10176",
	"chequeraId": "21",
	"tipoDenunciante": "A",
	"tipoDenuncia": "E",
	"motivoDenuncia": "P",
	"sdtCheques": {
	  "SdtsBTCheque": {
		"numero": "1327",
		"estado": "1",
		"descripcion": "Prueba"
	  }
	}
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>1820366692F955E77534D3E0</Token>
            <Device>AC</Device>
         </Btinreq>
         <numeroDenuncia>2</numeroDenuncia>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCuentasCorrientes.RegistrarOrdenDeNoPagoCheques</Servicio>
            <Fecha>2020-11-13</Fecha>
            <Hora>11:47:13</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7899</Numero>
            <Estado>NEG_ERROR</Estado>
         </Btoutreq>
      </BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "BANTOTAL",
	  "Token": "1820366692F955E77534D3E0",
	  "Device": "AC"
	},
	"numeroDenuncia": "2",
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTCuentasCorrientes.RegistrarOrdenDeNoPagoCheques",
	  "Fecha": "2020-11-13",
	  "Hora": "11:47:13",
	  "Requerimiento": "1",
	  "Numero": "7899",
	  "Estado": "NEG_ERROR"
	}
}'` }
  };

  structuredTypes = [{ typeName: 'sBTCheque', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion.' }, { Nombre: 'estado', Tipo: 'Short', Comentarios: 'Estado del cheque.' }, { Nombre: 'numero', Tipo: 'Int', Comentarios: 'Numero de cheque.' }] }];
}
