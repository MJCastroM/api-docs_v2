import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerDocumentoDigital',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDocumentoDigitalComponent {
  pageTitle = 'Obtener Documento Digital';
  description = `Metodo para obtener los datos de un documento digital de un prestamo.`;
  pubName    = 'BTPrestamos.ObtenerDocumentoDigital';
  programa   = 'RBTPG191';
  scope      = 'Global';

  

  hasBackendConfig  = true;
  backendText       = `Se puede parametrizar la opcion general por modulo 1416. En caso de estar en 'S', se inhabilitara el control de existencia de la operacion en la tabla FSD011. 

:::`;
  backendConfig     = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'documentoId', Tipo: 'Long', Comentarios: 'Identificador del documento.' }];
  outputData = [{ Nombre: 'sdtDocumentosDigitales', Tipo: '[sBTVersionDocumentoDigital](#sbtversiondocumentodigital)', Comentarios: 'Datos de version de documento digital.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de la operacion.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador de documento.' }, { Codigo: '30024', Descripcion: 'No se recupero la operacion para el identificador recibido.' }, { Codigo: '30031', Descripcion: 'El documento digital no existe.' }, { Codigo: '30032', Descripcion: 'Ocurrio un error al obtener la ultima version del documento.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDocumentoDigital>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0868626a064A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>10.12.10.159</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>121</bts:operacionUId>
         <bts:documentoId>35</bts:documentoId>
      </bts:BTPrestamos.ObtenerDocumentoDigital>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDocumentoDigital' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"operacionUId": "121",
	"documentoId": "35",
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ObtenerDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0868626a064A8B5C60A82434</Token>
         </Btinreq>
         <sdtDocumentosDigitales>
            <sBTVersionDocumentoDigital>
               <FechaEmision>2016-08-09</FechaEmision>
               <Archivo>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</Archivo>
               <FechaVencimiento>0000-00-00</FechaVencimiento>
               <TipoDocumentoDigital>Plan de Pagos</TipoDocumentoDigital>
               <Version>1</Version>
               <Nombre>CarpetaDigital.txt</Nombre>
               <documentoId>35</documentoId>
            </sBTVersionDocumentoDigital>
         </sdtDocumentosDigitales>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>888</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerDocumentoDigital</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-11-13</Fecha>
            <Hora>13:16:43</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerDocumentoDigitalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtDocumentosDigitales": {
        "sBTVersionDocumentoDigital": [
            {
                "FechaEmision": "2016-08-09",
                "Archivo": "RG9jdW1lbnRvIGRlIGVqZW1wbG8=",
                "FechaVencimiento": "0000-00-00",
                "TipoDocumentoDigital": "Plan de Pagos",
                "Version": 1,
                "Nombre": "CarpetaDigital.txt",
                "documentoId": 35
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 890,
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerDocumentoDigital",
        "Requerimiento": "1",
        "Fecha": "2018-11-13",
        "Hora": "13:17:56",
        "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [{ typeName: 'sBTVersionDocumentoDigital', fields: [{ Nombre: 'archivo', Tipo: 'String', Comentarios: 'Documento digital codificado en base 64.' }, { Nombre: 'documentoId', Tipo: 'Long', Comentarios: 'Titulo del documento digital.' }, { Nombre: 'fechaEmision', Tipo: 'Date', Comentarios: 'Fecha de emision del documento digital.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del documento digital.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del documento digital.' }, { Nombre: 'tipoDocumentoDigital', Tipo: 'String', Comentarios: 'Tipo del documento digital.' }, { Nombre: 'version', Tipo: 'Int', Comentarios: 'Numero de version del documento digital.' }] }];
}
