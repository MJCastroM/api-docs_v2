import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-CrearCliente',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CrearClienteComponent {
  pageTitle = 'Crear Cliente';
  description = `Metodo para crear cliente de Partner.`;
  pubName    = 'BTPartners.CrearCliente';
  programa   = 'RBTPN007';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'sdtPartner', Tipo: '[sBTPartnerInReq](#sbtpartnerinreq)', Comentarios: 'Datos del usuario.' }, { Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de la persona.' }, { Nombre: 'sectorId', Tipo: 'Short', Comentarios: 'Identificador del sector.' }, { Nombre: 'clasificacionInternaId', Tipo: 'Short', Comentarios: 'Identificador de la clasificacion interna.' }, { Nombre: 'ejecutivoId', Tipo: 'Int', Comentarios: 'Identificador del ejecutivo.' }];
  outputData = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de persona.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador del sector.' }, { Codigo: '30003', Descripcion: 'No se recibio el identificador de la clasificacion interna.' }, { Codigo: '30004', Descripcion: 'No existe persona para el identificador unico: [Numero de identificador].' }, { Codigo: '30005', Descripcion: 'Ya existe la cuenta.' }, { Codigo: '30007', Descripcion: 'La Contraparte ya esta relacionada al Partner: [Numero del Partner] - [Nombre del Partner].' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPartners.CrearCliente>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1222A10B1A106FB813BD7AE9</bts:Token>
         </bts:Btinreq>
         <bts:sdtPartner>
            <bts:puntoVentaUId>3</bts:puntoVentaUId>
            <bts:vendedorUId>23</bts:vendedorUId>
            <bts:partnerUId>5</bts:partnerUId>
         </bts:sdtPartner>
         <bts:personaUId>123</bts:personaUId>
         <bts:sectorId>2</bts:sectorId>
         <bts:clasificacionInternaId>1</bts:clasificacionInternaId>
         <bts:ejecutivoId>23</bts:ejecutivoId>
      </bts:BTPartners.CrearCliente>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?CrearCliente' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "3JPL6DC33CD84655A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
    "sdtPartner": {
      "puntoVentaUId": 3,
      "vendedorUId": 23,
      "partnerUId": 5
   },
   "personaUId": 123,
   "sectorId": 2,
   "clasificacionInternaId": 1,
   "ejecutivoId": 23
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPartners.CrearClienteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>0306ebbd9c4A8B5C60A82434</Token>
         </Btinreq>
         <clienteUId>181</clienteUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>770</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPartners.CrearCliente</Servicio>
            <Fecha>2017-12-14</Fecha>
            <Requerimiento/>
            <Hora>18:17:10</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.CrearClienteResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
   "Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": "202",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "835",
        "Estado": "OK",
        "Servicio": "BTPartners.CrearCliente",
        "Fecha": "2017-12-18",
        "Requerimiento": "",
        "Hora": "01:48:53",
        "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [{ typeName: 'sBTPartnerInReq', fields: [{ Nombre: 'partnerUId', Tipo: 'Int', Comentarios: 'Identificador del Partner.' }, { Nombre: 'puntoVentaUId', Tipo: 'Int', Comentarios: 'Identificador del punto de venta.' }, { Nombre: 'vendedorUId', Tipo: 'Int', Comentarios: 'Identificador del vendedor.' }] }];
}
