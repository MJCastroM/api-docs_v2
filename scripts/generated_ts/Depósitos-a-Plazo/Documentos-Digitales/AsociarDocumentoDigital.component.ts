import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-AsociarDocumentoDigital',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AsociarDocumentoDigitalComponent1750446218565 {
  pageTitle        = 'Asociar Documento Digital';
  description      = `Método para asociar un documento digital a un depósito a plazo.`;
  pubName    = 'BTDepositosAPlazo.AsociarDocumentoDigital';
  programa   = 'RBTPG564';
  scope      = 'Global';

  hasBackendConfig = true;
  backendText      = `Se puede parametrizar la opción general por módulo 1416. En caso de estar en \'S\', se inhabilitará el control de existencia de la operación en la tabla FSD011.

:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Long', Comentarios: 'Identificador del tipo de documento digital.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del documento.' }, { Nombre: 'archivoCodificado', Tipo: 'String', Comentarios: 'Archivo a asociar codificado en Base 64.' }, { Nombre: 'fechaEmision', Tipo: 'Date', Comentarios: 'Fecha de emisión del documento (en caso que corresponda).' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del documento (en caso que corresponda).' }];
  outputData = [{ Nombre: 'documentoId', Tipo: 'Long', Comentarios: 'Identificador del documento asociado.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de tipo de documento digital.' }, { Codigo: '30002', Descripcion: 'No se recibió nombre.' }, { Codigo: '30003', Descripcion: 'No se recibió el identificador de la operación.' }, { Codigo: '30004', Descripcion: 'No se recibió archivo codificado.' }, { Codigo: '30005', Descripcion: 'La operación ingresada no corresponde a un depósito a plazo.' }, { Codigo: '30021', Descripcion: 'No se recuperó el identificador para la operación recibida.' }, { Codigo: '40101', Descripcion: 'Ocurrió un error al recibir el archivo, puede que el mismo este corrupto.' }, { Codigo: '40993', Descripcion: 'Error de configuración: El vínculo de un tipo de documento digital no puede estar vacío.' }, { Codigo: '40994', Descripcion: 'Error de configuración: El vínculo de un tipo de documento digital no puede ser distinto al de la entidad invocadora.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDepositosAPlazo.AsociarDocumentoDigital>
         <bts:Btinreq>
            <bts:Device>10.12.10.159</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>1355f5da724A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>21</bts:operacionUId>
         <bts:tipoDocumentoId>3</bts:tipoDocumentoId>
         <bts:nombre>Prueba Asociar Contrato</bts:nombre>
         <bts:archivoCodificado>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</bts:archivoCodificado>
         <bts:fechaEmision>2010-10-10</bts:fechaEmision>
         <bts:fechaVencimiento>2020-10-10</bts:fechaVencimiento>
      </bts:BTDepositosAPlazo.AsociarDocumentoDigital>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?AsociarDocumentoDigital=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: dc197965-60bc-3f23-3367-5902a0392e1d\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"operacionUId":"21",
    "tipoDocumentoId":"3",
    "nombre":"Prueba Asociar Contrato",
    "archivoCodificado":"RG9jdW1lbnRvIGRlIGVqZW1wbG8=",
    "fechaEmision":"2010-10-10",
    "fechaVencimiento": "2020-10-10"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTDepositosAPlazo.AsociarDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>1355f5da724A8B5C60A82434</Token>
         </Btinreq>
         <documentoId>87</documentoId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>3089</Numero>
            <Estado>OK</Estado>
            <Servicio>BTDepositosAPlazo.AsociarDocumentoDigital</Servicio>
            <Fecha>2018-11-20</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>17:59:33</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.AsociarDocumentoDigitalResponse>
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
    "documentoId": 87,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 3089,
        "Estado": "OK",
        "Servicio": "BTDepositosAPlazo.AsociarDocumentoDigital",
        "Requerimiento": "1",
        "Fecha": "2018-11-20",
        "Hora": "17:59:33",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
