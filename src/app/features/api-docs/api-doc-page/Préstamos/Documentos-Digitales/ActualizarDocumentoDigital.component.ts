import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ActualizarDocumentoDigital',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarDocumentoDigitalComponent1751987199254 {
  pageTitle        = 'Actualizar Documento Digital';
  description      = `Método para actualizar el documento digital de un préstamo.`;
  pubName    = 'BTPrestamos.ActualizarDocumentoDigital';
  programa   = 'RBTPG173';
  scope      = 'Global';

  hasBackendConfig = true;
  backendText      = `Se puede parametrizar la opción general por módulo 1416. En caso de estar en \'S\', se inhabilitará el control de existencia de la operación en la tabla FSD011. 

:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación del préstamo.' }, { Nombre: 'documentoId', Tipo: 'Long', Comentarios: 'Identificador del documento.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del documento.' }, { Nombre: 'archivoCodificado', Tipo: 'String', Comentarios: 'Archivo codificado a asociar.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del documento (en caso que corresponda).' }, { Nombre: 'fechaEmision', Tipo: 'Date', Comentarios: 'Fecha de emisión del documento (en caso que corresponda).' }];
  outputData = [];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de instancia de documento digital.' }, { Código: '30002', Descripción: 'No se recibió nombre.' }, { Código: '30003', Descripción: 'No se recibió el identificador de la operación.' }, { Código: '30013', Descripción: 'No existe registro para el identificador indicado.' }, { Código: '30041', Descripción: 'Debe ingresar la fecha de emisión del documento.' }, { Código: '30042', Descripción: 'Debe ingresar la fecha de vencimiento del documento.' }, { Código: '30130', Descripción: 'Ocurrió un error al recibir el archivo, puede que el mismo este corrupto.' }, { Código: '31013', Descripción: 'Error de configuración: El vínculo de un tipo de documento digital no puede estar vacío.' }, { Código: '31024', Descripción: 'Error de configuración: El vínculo de un tipo de documento digital no puede ser distinto al de la entidad invocadora.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ActualizarDocumentoDigital>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>5744be79064A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:operacionUId>121</bts:operacionUId>
         <bts:documentoId>118</bts:documentoId>
         <bts:nombreDelDocumento>ejemplo</bts:nombreDelDocumento>
         <bts:archivoCodificado>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</bts:archivoCodificado>
         <bts:fechaDeEmision>2010-10-10</bts:fechaDeEmision>
         <bts:fechaDeVencimiento>2020-10-10</bts:fechaDeVencimiento>
      </bts:BTPrestamos.ActualizarDocumentoDigital>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?ActualizarDocumentoDigital\' \
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
	"operacionUId":"121",
    "documentoId":"118",
    "nombreDelDocumento":"ejemplo",
    "archivoCodificado":"RG9jdW1lbnRvIGRlIGVqZW1wbG8=",
    "fechaDeEmision":"2010-10-10",
    "fechaDeVencimiento": "2020-10-10"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ActualizarDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>5744be79064A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>870</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ActualizarDocumentoDigital</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-11-13</Fecha>
            <Hora>12:55:08</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ActualizarDocumentoDigitalResponse>
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
        "Numero": 872,
        "Estado": "OK",
        "Servicio": "BTPrestamos.ActualizarDocumentoDigital",
        "Requerimiento": "1",
        "Fecha": "2018-11-13",
        "Hora": "13:02:09",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
