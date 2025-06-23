import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDocumentosDigitales',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDocumentosDigitalesComponent1750713394399 {
  pageTitle        = 'Obtener Documentos Digitales';
  description      = `Método para obtener un listado de los documentos digitales de una persona.`;
  pubName    = 'BTPersonas.ObtenerDocumentosDigitales';
  programa   = 'RBTPG179';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }];
  outputData = [{ Nombre: 'sdtDocumentosDigitales', Tipo: '[sBTDocumentoDigital](#sbtdocumentodigital)', Comentarios: 'Listado de Documentos Digitales.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de la persona.' }, { Codigo: '30023', Descripcion: 'No existe registro para el identificador único.' }, { Codigo: '30050', Descripcion: 'La persona indicada no existe.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerDocumentosDigitales>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0868626a064A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>10.12.10.159</bts:Device>
         </bts:Btinreq>
         <bts:personaUId>22</bts:personaUId>
      </bts:BTPersonas.ObtenerDocumentosDigitales>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerDocumentosDigitales=\' \
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
	"personaUId": "22"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerDocumentosDigitalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0868626a064A8B5C60A82434</Token>
         </Btinreq>
         <documentosDigitales>
            <sBTDocumentoDigital>
               <Titulo>C.I</Titulo>
               <FechaActualizacion>2017-03-30</FechaActualizacion>
               <FechaVencimiento>2018-03-30</FechaVencimiento>
               <TipoDocumentoDigital>Cédula de Identidad</TipoDocumentoDigital>
               <documentoId>83</documentoId>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>C.I 2</Titulo>
               <FechaActualizacion>2017-03-30</FechaActualizacion>
               <FechaVencimiento>2018-03-30</FechaVencimiento>
               <TipoDocumentoDigital>Cédula de Identidad</TipoDocumentoDigital>
               <documentoId>84</documentoId>
            </sBTDocumentoDigital>
         </documentosDigitales>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>770</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ObtenerDocumentosDigitales</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-11-12</Fecha>
            <Hora>16:15:12</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerDocumentosDigitalesResponse>
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
    "documentosDigitales": {
        "sBTDocumentoDigital": [
            {
                "Titulo": "C.I",
                "FechaActualizacion": "2017-03-30",
                "FechaVencimiento": "2018-03-30",
                "TipoDocumentoDigital": "Cédula de Identidad",
                "DocumentoId": 83
            },
            {
                "Titulo": "C.I 2",
                "FechaActualizacion": "2017-03-30",
                "FechaVencimiento": "2018-03-30",
                "TipoDocumentoDigital": "Cédula de Identidad",
                "DocumentoId": 84
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 773,
        "Estado": "OK",
        "Servicio": "BTPersonas.ObtenerDocumentosDigitales",
        "Requerimiento": "1",
        "Fecha": "2018-11-12",
        "Hora": "16:17:09",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDocumentoDigital', fields: [{ Nombre: 'documentoId', Tipo: 'Long', Comentarios: 'Identificador del documento digital.' }, { Nombre: 'fechaActualizacion', Tipo: 'Date', Comentarios: 'Fecha de actualización del documento digital.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del documento digital.' }, { Nombre: 'tipoDocumentoDigital', Tipo: 'String', Comentarios: 'Tipo del documento digital.' }, { Nombre: 'titulo', Tipo: 'String', Comentarios: 'Título del documento digital.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
