import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../../route-animations';

@Component({
  selector: 'app-RegistrarOrdendeNoPagodeChequera',
  templateUrl: '../../../DocTemplate.component.html',
  styleUrls: ['../../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class RegistrarOrdendeNoPagodeChequeraComponent1751987196955 {
  pageTitle        = 'Registrar Orden de No Pago de Chequera';
  description      = `Método para registrar una orden de no pago de una chequera.`;
  pubName    = 'BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequera';
  programa   = 'RBTPG244';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación de subcuenta.' }, { Nombre: 'chequeraId', Tipo: 'Long', Comentarios: 'Identificador de solicitud de chequera.' }, { Nombre: 'tipoDenunciante', Tipo: 'String', Comentarios: 'Tipo de denunciante.' }, { Nombre: 'tipoDenuncia', Tipo: 'String', Comentarios: 'Tipo de denuncia.' }, { Nombre: 'motivoDenuncia', Tipo: 'String', Comentarios: 'Motivo de la denuncia.' }, { Nombre: 'chequeDesde', Tipo: 'Long', Comentarios: 'Número de cheque inicial de la chequera.' }, { Nombre: 'chequeHasta', Tipo: 'Long', Comentarios: 'Número de cheque final de la chequera.' }];
  outputData = [{ Nombre: 'numeroDenuncia', Tipo: 'Long', Comentarios: 'Identificador de la denuncia.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió identificador de operación.' }, { Código: '30002', Descripción: 'No se recibió identificador de chequera.' }, { Código: '30011', Descripción: 'No se recupero la operación para el identificador recibido.' }, { Código: '40002', Descripción: 'No existe la operación indicada.' }, { Código: '40003', Descripción: 'La chequera no pertenece a la operación.' }, { Código: '40004', Descripción: 'La cuenta no esta habilitada.' }, { Código: '40005', Descripción: 'La chequera no se encuentra activa.' }, { Código: '40006', Descripción: 'Cuenta Cerrada, solo se permite consultas.' }, { Código: '40008', Descripción: 'El cheque DESDE debe ser menor/igual que el HASTA.' }, { Código: '40009', Descripción: 'El cheque DESDE debe ser mayor/igual que el INICIAL de la chequera.' }, { Código: '40010', Descripción: 'El cheque HASTA debe ser mayor/igual que el INICIAL de la chequera.' }, { Código: '40011', Descripción: 'El cheque DESDE debe ser menor/igual que el ULTIMO de la chequera.' }, { Código: '40012', Descripción: 'El cheque HASTA debe ser menor/igual que el ULTIMO de la chequera.' }, { Código: '40013', Descripción: 'El cheque [Número de cheque] ya está pago.' }, { Código: '40014', Descripción: 'El cheque [Número de cheque] ya tiene O.N.P.' }, { Código: '40015', Descripción: 'El cheque [Número de cheque] está rechazado.' }, { Código: '40016', Descripción: 'El cheque [Número de cheque] esta certificado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequera>
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
         <bts:chequeDesde>1326</bts:chequeDesde>
         <bts:chequeHasta>1350</bts:chequeHasta>
      </bts:BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequera>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?RegistrarOrdenDeNoPagoChequera\' \
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
	"chequeraId": "21",
	"tipoDenunciante": "A",
	"tipoDenuncia": "E",
	"motivoDenuncia": "P",
	"chequeDesde": "1326",
	"chequeHasta": "1350"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequeraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>1820366692F955E77534D3E0</Token>
            <Device>AC</Device>
         </Btinreq>
         <numeroDenuncia>1</numeroDenuncia>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequera</Servicio>
            <Fecha>2020-11-13</Fecha>
            <Hora>11:20:03</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7888</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequeraResponse>
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
	"numeroDenuncia": "1",
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequera",
	  "Fecha": "2020-11-13",
	  "Hora": "11:20:03",
	  "Requerimiento": "1",
	  "Numero": "7888",
	  "Estado": "OK"
	}
}\'` }
  };

  structuredTypes = [];
}
