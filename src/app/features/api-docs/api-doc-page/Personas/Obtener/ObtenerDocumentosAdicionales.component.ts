import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDocumentosAdicionales',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDocumentosAdicionalesComponent1750713394455 {
  pageTitle        = 'Obtener Documentos Adicionales';
  description      = `Método para obtener un listado de los documentos adicionales de una persona.`;
  pubName    = 'BTPersonas.ObtenerDocumentosAdicionales';
  programa   = 'RBTPG130';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona' }];
  outputData = [{ Nombre: 'sdtDocumentosAdicionales', Tipo: '[sBTDocumentoAdicional](#sbtdocumentoadicional)', Comentarios: 'Listado de documentos adicionales' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de persona' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerDocumentosAdicionales>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>2e3c830e3a4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>21</bts:personaUId>
      </bts:BTPersonas.ObtenerDocumentosAdicionales>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerDocumentosAdicionales=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: a12f013d-9875-6451-dd62-ad7bb0217b5c\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "personaUId": 21     
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerDocumentosAdicionalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>2e3c830e3a4A8B5C60A82434</Token>
         </Btinreq>
         <sdtDocumentosAdicionales>
            <sBTDocumentoAdicional>
               <paisDocumento>63</paisDocumento>
               <paisDocumentoDsc>ARGENTINA</paisDocumentoDsc>
               <tipoDocumento>3</tipoDocumento>
               <tipoDocumentoDsc>Pasaporte</tipoDocumentoDsc>
               <nroDocumento>B8789452</nroDocumento>
               <fechaEmision>0000-00-00</fechaEmision>
               <fechaVencimiento>2025-01-01</fechaVencimiento>
            </sBTDocumentoAdicional>
         </sdtDocumentosAdicionales>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>72</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ObtenerDocumentosAdicionales</Servicio>
            <Requerimiento/>
            <Fecha>2018-05-04</Fecha>
            <Hora>13:43:22</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerDocumentosAdicionalesResponse>
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
   "sdtDocumentosAdicionales": {
      "sBTDocumentoAdicional": [ {
         "fechaEmision": "0000-00-00",
                "tipoDocumento": "3",
                "fechaVencimiento": "2025-01-01",
                "tipoDocumentoDsc": "Pasaporte",
                "paisDocumentoDsc": "ARGENTINA",
                "nroDocumento": "B8789452",
                "paisDocumento": "63"
      } ]
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "74",
      "Estado": "OK",
      "Servicio": "BTPersonas.ObtenerDocumentosAdicionales",
      "Fecha": "2018-05-04",
      "Requerimiento": "",
      "Hora": "15:42:08",
      "Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDocumentoAdicional', fields: [{ Nombre: 'fechaEmision', Tipo: 'Date', Comentarios: 'Fecha de emisión del documento.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del documento.' }, { Nombre: 'nroDocumento', Tipo: 'String', Comentarios: 'Número de documento.' }, { Nombre: 'paisDocumento', Tipo: 'Short', Comentarios: 'Identificador de país del documento.' }, { Nombre: 'paisDocumentoDsc', Tipo: 'String', Comentarios: 'Nombre del país del documento.' }, { Nombre: 'tipoDocumento', Tipo: 'Short', Comentarios: 'Identificador de tipo de documento.' }, { Nombre: 'tipoDocumentoDsc', Tipo: 'String', Comentarios: 'Nombre del tipo de documento.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
