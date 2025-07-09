import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-AgregarDocumentoAdicional',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AgregarDocumentoAdicionalComponent1751987198433 {
  pageTitle        = 'Agregar Documento Adicional';
  description      = `Método para agregar un documento adicional a una persona.`;
  pubName    = 'BTPersonas.AgregarDocumentoAdicional';
  programa   = 'RBTPG128';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de Persona.' }, { Nombre: 'sBTDocumentoAdicional', Tipo: '[sBTDocumentoAdicional](#sbtdocumentoadicional)', Comentarios: 'Datos de documento adicional.' }, { Nombre: 'modo', Tipo: 'String', Comentarios: '[Hidden: Valor fijo \'INS\' para este método].' }];
  outputData = [];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de persona.' }, { Código: '30011', Descripción: 'El país del documento adicional no es válido.' }, { Código: '30012', Descripción: 'El tipo de documento adicional no es válido.' }, { Código: '30013', Descripción: 'Número de Documento incorrecto.' }, { Código: '30014', Descripción: 'La fecha de emisión del documento no puede ser anterior a hoy.' }, { Código: '30015', Descripción: 'No se recibió fecha de vencimiento del documento.' }, { Código: '30016', Descripción: 'La fecha de vencimiento del documento no puede ser anterior a hoy.' }, { Código: '30017', Descripción: 'La persona ya posee ese documento adicional.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.AgregarDocumentoAdicional>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>2e3c830e3a4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:personaId>22</bts:personaId>
         <bts:sBTDocumentoAdicional>
            <bts:fechaEmision>2015-01-01</bts:fechaEmision>
            <bts:tipoDocumento>3</bts:tipoDocumento>
            <bts:fechaVencimiento>2025-01-01</bts:fechaVencimiento>
            <bts:tipoDocumentoDsc></bts:tipoDocumentoDsc>
            <bts:paisDocumentoDsc></bts:paisDocumentoDsc>
            <bts:nroDocumento>TRT00987</bts:nroDocumento>
            <bts:paisDocumento>63</bts:paisDocumento>
         </bts:sBTDocumentoAdicional>
      </bts:BTPersonas.AgregarDocumentoAdicional>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?AgregarDocumentoAdicional=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 3015b835-3a33-1203-e391-aa8b03d0d3cb\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "personaId": 21,
   "sBTDocumentoAdicional": {
      "fechaEmision": "0000-00-00",
      "tipoDocumento": "3",
      "fechaVencimiento": "2025-01-01",
      "tipoDocumentoDsc": "Pasaporte",
      "paisDocumentoDsc": "ARGENTINA",
      "nroDocumento": "B8789452",
      "paisDocumento": "63"
   }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.AgregarDocumentoAdicionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>2e3c830e3a4A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>87</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.AgregarDocumentoAdicional</Servicio>
            <Requerimiento/>
            <Fecha>2018-05-04</Fecha>
            <Hora>16:12:00</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.AgregarDocumentoAdicionalResponse>
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
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "94",
        "Estado": "OK",
        "Servicio": "BTPersonas.AgregarDocumentoAdicional",
        "Requerimiento": "",
        "Fecha": "2018-05-04",
        "Hora": "16:18:26",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDocumentoAdicional', fields: [{ Nombre: 'fechaEmision', Tipo: 'Date', Comentarios: 'Fecha de emisión del documento.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del documento.' }, { Nombre: 'nroDocumento', Tipo: 'String', Comentarios: 'Número de documento.' }, { Nombre: 'paisDocumento', Tipo: 'Short', Comentarios: 'Identificador de país del documento.' }, { Nombre: 'paisDocumentoDsc', Tipo: 'String', Comentarios: 'Nombre del país del documento.' }, { Nombre: 'tipoDocumento', Tipo: 'Short', Comentarios: 'Identificador de tipo de documento.' }, { Nombre: 'tipoDocumentoDsc', Tipo: 'String', Comentarios: 'Nombre del tipo de documento.' }] }];
}
