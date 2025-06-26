import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../../route-animations';

@Component({
  selector: 'app-RegistrarOrdendeNoPagodeChequera',
  templateUrl: '../../../DocTemplate.component.html',
  styleUrls: ['../../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class RegistrarOrdendeNoPagodeChequeraComponent1750945332620 {
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
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador de operación.' }, { Codigo: '30002', Descripcion: 'No se recibió identificador de chequera.' }, { Codigo: '30011', Descripcion: 'No se recupero la operación para el identificador recibido.' }, { Codigo: '40002', Descripcion: 'No existe la operación indicada.' }, { Codigo: '40003', Descripcion: 'La chequera no pertenece a la operación.' }, { Codigo: '40004', Descripcion: 'La cuenta no esta habilitada.' }, { Codigo: '40005', Descripcion: 'La chequera no se encuentra activa.' }, { Codigo: '40006', Descripcion: 'Cuenta Cerrada, solo se permite consultas.' }, { Codigo: '40008', Descripcion: 'El cheque DESDE debe ser menor/igual que el HASTA.' }, { Codigo: '40009', Descripcion: 'El cheque DESDE debe ser mayor/igual que el INICIAL de la chequera.' }, { Codigo: '40010', Descripcion: 'El cheque HASTA debe ser mayor/igual que el INICIAL de la chequera.' }, { Codigo: '40011', Descripcion: 'El cheque DESDE debe ser menor/igual que el ULTIMO de la chequera.' }, { Codigo: '40012', Descripcion: 'El cheque HASTA debe ser menor/igual que el ULTIMO de la chequera.' }, { Codigo: '40013', Descripcion: 'El cheque [Número de cheque] ya está pago.' }, { Codigo: '40014', Descripcion: 'El cheque [Número de cheque] ya tiene O.N.P.' }, { Codigo: '40015', Descripcion: 'El cheque [Número de cheque] está rechazado.' }, { Codigo: '40016', Descripcion: 'El cheque [Número de cheque] esta certificado.' }];

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
