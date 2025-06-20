import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDocumentosDigitales',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDocumentosDigitalesComponent1750446218852 {
  pageTitle        = 'Obtener Documentos Digitales';
  description      = `Método para obtener un listado de los documentos digitales asociados a un préstamo.`;
  pubName    = 'BTPrestamos.ObtenerDocumentosDigitales';
  programa   = 'RBTPG180';
  scope      = 'Global';

  hasBackendConfig = true;
  backendText      = `Se puede parametrizar la opción general por módulo 1416. En caso de estar en \'S\', se inhabilitará el control de existencia de la operación en la tabla FSD011. 

:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }];
  outputData = [{ Nombre: 'sdtDocumentosDigitales', Tipo: '[sBTDocumentoDigital](#sbtdocumentodigital)', Comentarios: 'Listado de documentos digitales.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de la operación.' }, { Codigo: '30021', Descripcion: 'No se recupero la operación para el identificador recibido.' }, { Codigo: '30031', Descripcion: 'La operación seleccionada no corresponde a un producto de préstamos.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDocumentosDigitales>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0868626a064A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>10.12.10.159</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>121</bts:operacionUId>
      </bts:BTPrestamos.ObtenerDocumentosDigitales>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDocumentosDigitales\' \
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
	"operacionUId": "121",
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ObtenerDocumentosDigitalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0868626a064A8B5C60A82434</Token>
         </Btinreq>
         <sdtDocumentosDigitales>
            <sBTDocumentoDigital>
               <Titulo>Plan de Pagos</Titulo>
               <FechaActualizacion>2016-08-09</FechaActualizacion>
               <FechaVencimiento>0000-00-00</FechaVencimiento>
               <TipoDocumentoDigital>Plan de Pagos</TipoDocumentoDigital>
               <documentoId>35</documentoId>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>Contrato</Titulo>
               <FechaActualizacion>2017-12-08</FechaActualizacion>
               <FechaVencimiento>2019-08-22</FechaVencimiento>
               <TipoDocumentoDigital>Contrato</TipoDocumentoDigital>
               <documentoId>36</documentoId>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>Constitución</Titulo>
               <FechaActualizacion>2017-03-28</FechaActualizacion>
               <FechaVencimiento>0000-00-00</FechaVencimiento>
               <TipoDocumentoDigital>Constitución de Prenda</TipoDocumentoDigital>
               <documentoId>74</documentoId>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>constitución 2</Titulo>
               <FechaActualizacion>2017-03-28</FechaActualizacion>
               <FechaVencimiento>2018-03-28</FechaVencimiento>
               <TipoDocumentoDigital>Constitución de Prenda</TipoDocumentoDigital>
               <documentoId>75</documentoId>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>contarto</Titulo>
               <FechaActualizacion>0000-00-00</FechaActualizacion>
               <FechaVencimiento>0000-00-00</FechaVencimiento>
               <TipoDocumentoDigital>Contrato de Cesión</TipoDocumentoDigital>
               <documentoId>78</documentoId>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>contarto 2</Titulo>
               <FechaActualizacion>0000-00-00</FechaActualizacion>
               <FechaVencimiento>0000-00-00</FechaVencimiento>
               <TipoDocumentoDigital>Contrato de Cesión</TipoDocumentoDigital>
               <documentoId>79</documentoId>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>Prueba Asociar</Titulo>
               <FechaActualizacion>2017-10-11</FechaActualizacion>
               <FechaVencimiento>2018-12-08</FechaVencimiento>
               <TipoDocumentoDigital>Contrato de Cesión</TipoDocumentoDigital>
               <documentoId>103</documentoId>
            </sBTDocumentoDigital>
         </sdtDocumentosDigitales>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>832</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerDocumentosDigitales</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-11-13</Fecha>
            <Hora>11:57:08</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerDocumentosDigitalesResponse>
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
    "sdtDocumentosDigitales": {
        "sBTDocumentoDigital": [
            {
                "Titulo": "Plan de Pagos",
                "FechaActualizacion": "2016-08-09",
                "FechaVencimiento": "0000-00-00",
                "TipoDocumentoDigital": "Plan de Pagos",
                "documentoId": 35
            },
            {
                "Titulo": "Contrato",
                "FechaActualizacion": "2017-12-08",
                "FechaVencimiento": "2019-08-22",
                "TipoDocumentoDigital": "Contrato",
                "documentoId": 36
            },
            {
                "Titulo": "Constitución",
                "FechaActualizacion": "2017-03-28",
                "FechaVencimiento": "0000-00-00",
                "TipoDocumentoDigital": "Constitución de Prenda",
                "documentoId": 74
            },
            {
                "Titulo": "constitución 2",
                "FechaActualizacion": "2017-03-28",
                "FechaVencimiento": "2018-03-28",
                "TipoDocumentoDigital": "Constitución de Prenda",
                "documentoId": 75
            },
            {
                "Titulo": "contarto",
                "FechaActualizacion": "0000-00-00",
                "FechaVencimiento": "0000-00-00",
                "TipoDocumentoDigital": "Contrato de Cesión",
                "documentoId": 78
            },
            {
                "Titulo": "contarto 2",
                "FechaActualizacion": "0000-00-00",
                "FechaVencimiento": "0000-00-00",
                "TipoDocumentoDigital": "Contrato de Cesión",
                "documentoId": 79
            },
            {
                "Titulo": "Prueba Asociar",
                "FechaActualizacion": "2017-10-11",
                "FechaVencimiento": "2018-12-08",
                "TipoDocumentoDigital": "Contrato de Cesión",
                "documentoId": 103
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 823,
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerDocumentosDigitales",
        "Requerimiento": "1",
        "Fecha": "2018-11-12",
        "Hora": "17:47:27",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDocumentoDigital', fields: [{ Nombre: 'documentoId', Tipo: 'Long', Comentarios: 'Identificador del documento digital.' }, { Nombre: 'fechaActualizacion', Tipo: 'Date', Comentarios: 'Fecha de actualización del documento digital.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del documento digital.' }, { Nombre: 'tipoDocumentoDigital', Tipo: 'String', Comentarios: 'Tipo del documento digital.' }, { Nombre: 'titulo', Tipo: 'String', Comentarios: 'Título del documento digital.' }] }];
}
