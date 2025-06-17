import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ActualizarDocumentoDigital',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarDocumentoDigitalComponent {
  // Cabecera e info-card
  pageTitle = 'Actualizar Documento Digital';
  description = `Metodo para actualizar un documento digital para una cuenta vista.`;
  pubName    = 'BTCuentasVista.ActualizarDocumentoDigital';
  programa   = 'RBTPG176';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['operacionUId', 'documentoId', 'nombre', 'archivoCodificado', 'fechaEmision', 'fechaVencimiento'];
  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'documentoId', Tipo: 'Long', Comentarios: 'Identificador del documento digital.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del documento.' }, { Nombre: 'archivoCodificado', Tipo: 'String', Comentarios: 'Archivo a asociar codificado en Base 64.' }, { Nombre: 'fechaEmision', Tipo: 'Date', Comentarios: 'Fecha de emision del documento (en caso que corresponda).' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del documento (en caso que corresponda).' }];
  outputCols = [];
  outputData = [];
  errorCols  = ['30001', '30002', '30003', '30021', '30051', '30052', '30054', '30130', '31023', '31024'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de instancia de documento digital.' }, { Codigo: '30002', Descripcion: 'No se recibio nombre.' }, { Codigo: '30003', Descripcion: 'No se recibio el identificador de la operacion.' }, { Codigo: '30021', Descripcion: 'No se recupero el identificador para la operacion recibida.' }, { Codigo: '30051', Descripcion: 'Debe ingresar la fecha de emision del documento.' }, { Codigo: '30052', Descripcion: 'Debe ingresar la fecha de vencimiento del documento.' }, { Codigo: '30054', Descripcion: 'El documento ingresado no pertenece a la operacion.' }, { Codigo: '30130', Descripcion: 'Ocurrio un error al recibir el archivo, puede que el mismo este corrupto.' }, { Codigo: '31023', Descripcion: 'Error de configuracion: El vinculo de un tipo de documento digital no puede estar vacio.' }, { Codigo: '31024', Descripcion: 'Error de configuracion: El vinculo de un tipo de documento digital no puede ser distinto al de la entidad invocadora.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasVista.ActualizarDocumentoDigital>
         <bts:Btinreq>
		  <bts:Device>10.12.10.159</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>4724b65a9d4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>21</bts:operacionUId>
         <bts:documentoId>86</bts:documentoId>
         <bts:nombre>Prueba actualizar</bts:nombre>
         <bts:archivoCodificado>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</bts:archivoCodificado>
         <bts:fechaVencimiento>2020-10-10</bts:fechaVencimiento>
         <bts:fechaEmision>2010-10-10</bts:fechaEmision>
      </bts:BTCuentasVista.ActualizarDocumentoDigital>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ActualizarDocumentoDigital=' \
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
    "documentoId":"86",
    "nombre":"Prueba actualizar",
    "archivoCodificado":"RG9jdW1lbnRvIGRlIGVqZW1wbG8=",
    "fechaEmision":"2010-10-10",
    "fechaVencimiento": "2020-10-10"
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasVista.ActualizarDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b98a5858014A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>3105</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasVista.ActualizarDocumentoDigital</Servicio>
            <Fecha>2018-11-21</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>12:00:50</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.ActualizarDocumentoDigitalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
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
        "Numero": "3103",
        "Estado": "OK",
        "Servicio": "BTCuentasVista.ActualizarDocumentoDigital",
        "Fecha": "2018-11-21",
        "Requerimiento": "1",
        "Hora": "12:00:07",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [];
}
