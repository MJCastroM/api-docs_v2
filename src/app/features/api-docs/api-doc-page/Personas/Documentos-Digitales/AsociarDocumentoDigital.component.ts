import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-AsociarDocumentoDigital',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AsociarDocumentoDigitalComponent1751987198568 {
  pageTitle        = 'Asociar Documento Digital';
  description      = `Método para asociar un documento digital a una persona.`;
  pubName    = 'BTPersonas.AsociarDocumentoDigital';
  programa   = 'RBTPG169';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Long', Comentarios: 'Identificador del tipo de documento.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del documento.' }, { Nombre: 'archivoCodificado', Tipo: 'String', Comentarios: 'Archivo a asociar codificado.' }, { Nombre: 'fechaEmision', Tipo: 'Date', Comentarios: 'Fecha de emisión del documento (en caso que corresponda).' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del documento (en caso que corresponda).' }];
  outputData = [{ Nombre: 'documentoId', Tipo: 'Long', Comentarios: 'Identificador del documento asociado.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de tipo de documento digital.' }, { Código: '30002', Descripción: 'No se recibió nombre.' }, { Código: '30004', Descripción: 'No se recibió el identificador de persona.' }, { Código: '30013', Descripción: 'No existe registro para el identificador indicado.' }, { Código: '30041', Descripción: 'Debe ingresar la fecha de emisión del documento.' }, { Código: '30042', Descripción: 'Debe ingresar la fecha de vencimiento del documento.' }, { Código: '31030', Descripción: 'Ocurrió un error al recibir el archivo, puede que el mismo esté corrupto.' }, { Código: '31013', Descripción: 'Error de configuración: El vínculo de un tipo de documento digital no puede estar vacío.' }, { Código: '31024', Descripción: 'Error de configuración: El vínculo de un tipo de documento digital no puede ser distinto al de la entidad invocadora.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.AsociarDocumentoDigital>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>5744be79064A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>21</bts:personaUId>
         <bts:tipoDocumentoId>10003</bts:tipoDocumentoId>
         <bts:nombre>ejemplo</bts:nombre>
         <bts:archivoCodificado>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</bts:archivoCodificado>
         <bts:fechaEmision>2010-10-10</bts:fechaEmision>
         <bts:fechaVencimiento>2020-10-10</bts:fechaVencimiento>
      </bts:BTPersonas.AsociarDocumentoDigital>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?AsociarDocumentoDigital\' \
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
	"personaUId":"21",
   "tipoDocumentoId":"10005",
   "nombre":"ejemplo",
   "archivoCodificado":"RG9jdW1lbnRvIGRlIGVqZW1wbG8=",
   "fechaEmision":"2010-10-10",
   "fechaVencimiento": "2020-10-10"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.AsociarDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>5744be79064A8B5C60A82434</Token>
         </Btinreq>
         <documentoId>112</documentoId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>813</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.AsociarDocumentoDigital</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-11-12</Fecha>
            <Hora>17:38:49</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.AsociarDocumentoDigitalResponse>
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
    "documentoId": 115,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 818,
        "Estado": "OK",
        "Servicio": "BTPersonas.AsociarDocumentoDigital",
        "Requerimiento": "1",
        "Fecha": "2018-11-12",
        "Hora": "17:42:23",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
