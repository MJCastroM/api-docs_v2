import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-AsociarDocumentoDigital',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AsociarDocumentoDigitalComponent {
  pageTitle = 'Asociar Documento Digital';
  description = `Metodo para asociar un documento digital a una cuenta vista.`;
  pubName    = 'BTCuentasVista.AsociarDocumentoDigital';
  programa   = 'RBTPG202';
  scope      = 'Global';

  

  hasBackendConfig  = true;
  backendText       = `Se puede parametrizar la opcion general por modulo 1416. En caso de estar en 'S', se inhabilitara el control de existencia de la operacion en la tabla FSD011.

:::`;
  backendConfig     = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Long', Comentarios: 'Identificador del tipo de documento digital.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del documento.' }, { Nombre: 'archivoCodificado', Tipo: 'String', Comentarios: 'Archivo a asociar codificado en Base 64.' }, { Nombre: 'fechaEmision', Tipo: 'Date', Comentarios: 'Fecha de emision del documento (en caso que corresponda).' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del documento (en caso que corresponda).' }];
  outputData = [{ Nombre: 'documentoId', Tipo: 'Long', Comentarios: 'Identificador del documento asociado.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de tipo de documento digital.' }, { Codigo: '30002', Descripcion: 'No se recibio nombre.' }, { Codigo: '30003', Descripcion: 'No se recibio el identificador de la operacion.' }, { Codigo: '30004', Descripcion: 'No se recibio archivo codificado.' }, { Codigo: '30021', Descripcion: 'No se recupero el identificador para la operacion recibida.' }, { Codigo: '30051', Descripcion: 'Debe ingresar la fecha de emision del documento.' }, { Codigo: '30052', Descripcion: 'Debe ingresar la fecha de vencimiento del documento.' }, { Codigo: '30531', Descripcion: 'Ya existe el tipo de documento asociado a la Operacion.' }, { Codigo: '31030', Descripcion: 'Ocurrio un error al recibir el archivo, puede que el mismo este corrupto.' }, { Codigo: '31023', Descripcion: 'Error de configuracion: El vinculo de un tipo de documento digital no puede estar vacio.' }, { Codigo: '31024', Descripcion: 'Error de configuracion: El vinculo de un tipo de documento digital no puede ser distinto al de la entidad invocadora.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasVista.AsociarDocumentoDigital>
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
      </bts:BTCuentasVista.AsociarDocumentoDigital>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?AsociarDocumentoDigital=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: dc197965-60bc-3f23-3367-5902a0392e1d' \
  -d '{
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
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasVista.AsociarDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
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
            <Servicio>BTCuentasVista.AsociarDocumentoDigital</Servicio>
            <Fecha>2018-11-20</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>17:59:33</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.AsociarDocumentoDigitalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
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
        "Servicio": "BTCuentasVista.AsociarDocumentoDigital",
        "Requerimiento": "1",
        "Fecha": "2018-11-20",
        "Hora": "17:59:33",
        "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [];
}
