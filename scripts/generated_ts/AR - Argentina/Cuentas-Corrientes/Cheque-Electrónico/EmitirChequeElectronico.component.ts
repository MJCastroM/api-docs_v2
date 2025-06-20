import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../../route-animations';

@Component({
  selector: 'app-EmitirChequeElectronico',
  templateUrl: '../../../DocTemplate.component.html',
  styleUrls: ['../../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class EmitirChequeElectronicoComponent1750272790706 {
  pageTitle        = 'Emitir Cheque Electrónico';
  description      = `Método para emitir un cheque electrónico de una chequera. Si la chequera no existe, crea una.`;
  pubName    = 'BTCuentasCorrientes.EmitirChequeElectronico';
  programa   = 'RBTPAR27';
  scope      = 'Argentina';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación de subcuenta.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: 'cantidadCheques', Tipo: 'Short', Comentarios: 'Cantidad de cheques a emitir.' }, { Nombre: 'CUITBeneficiario', Tipo: 'String', Comentarios: 'CUIT del beneficiario.' }, { Nombre: 'paisBeneficiarioId', Tipo: 'Short', Comentarios: 'Identificador de país del beneficiario.' }, { Nombre: 'tipoDocumentoBeneficiarioId', Tipo: 'Byte', Comentarios: 'Identificador de tipo de documento del beneficiario.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago' }];
  outputData = [{ Nombre: 'listaCheques', Tipo: '[sBTChequeElectronico](#sbtchequeelectronico)', Comentarios: 'Listado de cheques.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de la operación.' }, { Codigo: '30002', Descripcion: 'No existe registro con el identificador indicado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasCorrientes.EmitirChequeElectronico>
         <bts:Btinreq>
           <bts:Device>10</bts:Device>
            <bts:Usuario>BA</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>ec8CE93AA1</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>15</bts:operacionUId>
         <bts:cantidadCheques>1</bts:cantidadCheques>
         <bts:importe>5000</bts:importe>
         <bts:CUITBeneficiario>3435262644</bts:CUITBeneficiario>
         <bts:paisBeneficiarioId>243</bts:paisBeneficiarioId>
         <bts:tipoDocumentoBeneficiarioId>2</bts:tipoDocumentoBeneficiarioId>
         <bts:fechaPago>2019-05-05</bts:fechaPago>
      </bts:BTCuentasCorrientes.EmitirChequeElectronico>
   </soapenv:Body>
</soapenv:Envelope></soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?EmitirChequeElectronico\' \
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
	"cantidadCheques": "5",
	"importe": "5000",
	"CUITBeneficiario": "3435262644",
	"paisBeneficiarioId": "243",
	"tipoDocumentoBeneficiarioId": "2",
	"fechaPago": "2019-05-05"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasCorrientes.EmitirChequeElectronicoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>BA</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>ec8CE93AA1</Token>
         </Btinreq>
         <listaCheques>
            <sBTChequeElectronico>
               <beneficiario>3435262644</beneficiario>
               <numeroCheque>4009969</numeroCheque>
               <importe>1000.00</importe>
               <numeroChequera>50243</numeroChequera>
               <CMC7>00110010030400996900000000747</CMC7>
           </sBTChequeElectronico>
            <sBTChequeElectronico>
               <beneficiario>3435262644</beneficiario>
               <numeroCheque>4009970</numeroCheque>
               <importe>1000.00</importe>
               <numeroChequera>50243</numeroChequera>
               <CMC7>00110010030400997000000000747</CMC7>
            </sBTChequeElectronico>
            <sBTChequeElectronico>
               <beneficiario>3435262644</beneficiario>
               <numeroCheque>4009971</numeroCheque>
               <importe>1000.00</importe>
               <numeroChequera>50243</numeroChequera>
               <CMC7>00110010030400997100000000747</CMC7>
            </sBTChequeElectronico>
            <sBTChequeElectronico>
               <beneficiario>3435262644</beneficiario>
               <numeroCheque>4009972</numeroCheque>
               <importe>1000.00</importe>
               <numeroChequera>50243</numeroChequera>
               <CMC7>00110010030400997200000000747</CMC7>
            </sBTChequeElectronico>
            <sBTChequeElectronico>
               <beneficiario>3435262644</beneficiario>
               <numeroCheque>4009973</numeroCheque>
               <importe>1000.00</importe>
               <numeroChequera>50243</numeroChequera>
               <CMC7>00110010030400997300000000747</CMC7>
            </sBTChequeElectronico>
         </listaCheques>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>2565</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasCorrientes.EmitirChequeElectronico</Servicio>
            <Fecha>2019-05-28</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>11:40:41</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasCorrientes.EmitirChequeElectronicoResponse>
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
	"listaCheques": {
		"sBTChequeElectronico": [
			{
				"beneficiario": "3435262644",
				"NumeroCheque": "4009969",
				"importe": "1000.00",
				"numeroChequera": "50243",
				"CMC7": "00110010030400996900000000747"
			},
			{
				"beneficiario": "3435262644",
				"numeroCheque": "4009970",
				"importe": "1000.00",
				"numeroChequera": "50243",
				"CMC7": "00110010030400997000000000747"
			},
			{
				"beneficiario": "3435262644",
				"numeroCheque": "4009971",
				"importe": "1000.00",
				"numeroChequera": "50243",
				"CMC7": "00110010030400997100000000747"
			},
			{
				"beneficiario": "3435262644",
				"numeroCheque": "4009972",
				"importe": "1000.00",
				"numeroChequera": "50243",
				"CMC7": "00110010030400997200000000747"
			},
			{
				"beneficiario": "3435262644",
				"numeroCheque": "4009973",
				"importe": "1000.00",
				"numeroChequera": "50243",
				"CMC7": "00110010030400997300000000747"
			}
		]
	}
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8396,
        "Estado": "OK",
        "Servicio": "BTCuentasCorrientes.EmitirChequeElectronico",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTChequeElectronico', fields: [{ Nombre: 'beneficiario', Tipo: 'String', Comentarios: 'Nombre del beneficiario.' }, { Nombre: 'CMC7', Tipo: 'Long', Comentarios: 'Identificador CMC7 de cheque electrónico.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: 'numerocheque', Tipo: 'Long', Comentarios: 'Numero de cheque electrónico.' }, { Nombre: 'numerochequera', Tipo: 'Long', Comentarios: 'Numero de chequera electrónica.' }] }];
}
